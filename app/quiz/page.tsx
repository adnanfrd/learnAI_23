"use client";

import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Types for API data
interface QuizStep {
  id: number;
  step_id: string;
  title: string;
  order: number;
  is_active: number;
  created_at: string;
}

interface QuizItem {
  id: number;
  item_id: string;
  step_id: string;
  type: 'radio' | 'checkbox' | 'transition' | 'scale' | 'yesno' | 'input' | 'content';
  text: string | null;
  title: string | null;
  description: string | null;
  placeholder: string | null;
  image: string | null;
  textbox: string | null;
  order: number;
  hide_bars: number;
  ratings_block: number;
  is_active: number;
  created_at: string;
}

interface QuizOption {
  id: number;
  item_id: string;
  option_text: string;
  order: number;
  is_active: number;
  created_at: string;
}

interface ContentParagraph {
  id: number;
  item_id: string;
  paragraph: string;
  order: number;
  created_at: string;
}

interface QuizApiResponse {
  success: boolean;
  message: string;
  data: {
    steps: QuizStep[];
    items: QuizItem[];
    options: QuizOption[];
    paragraphs: ContentParagraph[];
  };
  count: {
    steps: number;
    items: number;
    options: number;
    paragraphs: number;
  };
}

export default function QuizPage() {
  const [quizData, setQuizData] = useState<QuizApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [checkboxState, setCheckboxState] = useState<Record<string, Set<string>>>({});
  const [userInfo, setUserInfo] = useState<{email?: string; name?: string}>({});
  const [sessionId, setSessionId] = useState<string>('');
  
  const router = useRouter();

  // Load quiz data from API
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        console.log('Fetching quiz data from API...');
        const response = await fetch('/api/quiz');
        const data: QuizApiResponse = await response.json();
        
        if (data.success) {
          setQuizData(data);
          console.log('Quiz data loaded:', data.count);
        } else {
          console.error('Failed to fetch quiz data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData();
  }, []);

  // Generate session ID
  useEffect(() => {
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(newSessionId);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-xl">Loading Quiz...</p>
        </div>
      </div>
    );
  }

  if (!quizData?.success) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600">Failed to load quiz data</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Transform API data to component format
  const transformQuizData = () => {
    const { steps, items, options, paragraphs } = quizData.data;
    
    return steps.map(step => ({
      id: step.step_id,
      title: step.title,
      items: items
        .filter(item => item.step_id === step.step_id)
        .sort((a, b) => a.order - b.order)
        .map(item => {
          const baseItem: any = {
            id: item.item_id,
            type: item.type,
          };

          // Add fields based on type
          if (item.text) baseItem.text = item.text;
          if (item.title) baseItem.title = item.title;
          if (item.description) baseItem.description = item.description;
          if (item.placeholder) baseItem.placeholder = item.placeholder;
          if (item.image) baseItem.image = item.image;
          if (item.textbox) baseItem.textbox = item.textbox;
          if (item.hide_bars) baseItem.hideBars = Boolean(item.hide_bars);
          if (item.ratings_block) baseItem.ratingsBlock = Boolean(item.ratings_block);

          // Add options for radio/checkbox/yesno
          const itemOptions = options
            .filter(opt => opt.item_id === item.item_id)
            .sort((a, b) => a.order - b.order)
            .map(opt => opt.option_text);
          
          if (itemOptions.length > 0) {
            baseItem.options = itemOptions;
          }

          // Add paragraphs for content type
          if (item.type === 'content') {
            const itemParagraphs = paragraphs
              .filter(p => p.item_id === item.item_id)
              .sort((a, b) => a.order - b.order)
              .map(p => p.paragraph);
            
            if (itemParagraphs.length > 0) {
              baseItem.paragraphs = itemParagraphs;
            }
          }

          return baseItem;
        })
    }));
  };

  const steps = transformQuizData();
  const currentStep = steps[stepIndex];
  const currentItem = currentStep?.items[itemIndex] || null;

  // Save user response to database
  const saveResponse = async (itemId: string, response: any) => {
    try {
      const payload = {
        sessionId,
        itemId,
        response: JSON.stringify(response),
        responseType: Array.isArray(response) ? 'checkbox' : 
                     typeof response === 'number' ? 'scale' : 'single',
        userInfo
      };

      const saveResponse = await fetch('/api/quiz/response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await saveResponse.json();
      console.log('Response saved:', result);
    } catch (error) {
      console.error('Error saving response:', error);
    }
  };

  // Submit final quiz data
  const submitQuiz = async () => {
    try {
      const payload = {
        sessionId,
        responses: answers,
        userInfo,
        completedAt: new Date().toISOString()
      };

      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json() as { success: boolean; [key: string]: any };
      console.log('Quiz submitted:', result);

      if (result.success) {
        router.push('/selling-page');
      }
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  const handleRadio = (id: string, value: string, autoNext = true) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
    saveResponse(id, value);

    if (autoNext) {
      setTimeout(() => moveNext(), 300);
    }
  };

  const handleCheckboxToggle = (id: string, option: string) => {
    setCheckboxState(prev => {
      const current = prev[id] ? new Set(Array.from(prev[id])) : new Set<string>();
      if (current.has(option)) current.delete(option);
      else current.add(option);
      return { ...prev, [id]: current };
    });
  };

  const handleContinue = () => {
    const cur = currentItem;
    if (!cur) return;

    if (cur.type === "checkbox") {
      const chosen = checkboxState[cur.id];
      if (!chosen || chosen.size === 0) return;
      
      const chosenArray = Array.from(chosen);
      setAnswers(prev => ({ ...prev, [cur.id]: chosenArray }));
      saveResponse(cur.id, chosenArray);
    }

    if (cur.type === "input") {
      if (!answers[cur.id]) return;
      
      // Store user info for email/name inputs
      if (cur.title?.toLowerCase().includes("email")) {
        setUserInfo(prev => ({ ...prev, email: answers[cur.id] }));
      }
      if (cur.title?.toLowerCase().includes("name")) {
        setUserInfo(prev => ({ ...prev, name: answers[cur.id] }));
      }
      
      saveResponse(cur.id, answers[cur.id]);
    }

    moveNext();
  };

  const moveNext = () => {
    const step = steps[stepIndex];
    if (!step) return;

    if (itemIndex < step.items.length - 1) {
      setItemIndex(itemIndex + 1);
    } else {
      if (stepIndex < steps.length - 1) {
        setStepIndex(stepIndex + 1);
        setItemIndex(0);
      } else {
        // Quiz completed
        submitQuiz();
      }
    }
  };

  const setInput = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  // Calculate progress
  const answeredCount = currentStep
    ? currentStep.items.filter(item => {
        if (item.type === "checkbox") {
          const s = checkboxState[item.id];
          return s && s.size > 0;
        }
        return answers[item.id] !== undefined && answers[item.id] !== null && answers[item.id] !== "";
      }).length
    : 0;
  
  const progress = currentStep ? Math.round((answeredCount / currentStep.items.length) * 100) : 0;

  const goPrev = () => {
    if (itemIndex > 0) {
      setItemIndex(itemIndex - 1);
    } else if (stepIndex > 0) {
      const prevLen = steps[stepIndex - 1].items.length;
      setStepIndex(stepIndex - 1);
      setItemIndex(prevLen - 1);
    }
  };

  const renderTopBars = () => {
    return (
      <div className="flex gap-2 justify-center mb-6 w-full">
        {steps.map((s, idx) => {
          const isPast = idx < stepIndex;
          const isCurrent = idx === stepIndex;
          const widthStyle = isPast ? "100%" : isCurrent ? `${progress}%` : "0%";
          return (
            <div key={s.id} className="h-3 rounded-full bg-gray-200 flex-1 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-3 transition-all"
                style={{
                  width: widthStyle,
                  background: isPast || isCurrent ? "#2563EB" : "#E5E7EB",
                }}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-white text-black">
      <div className="w-full max-w-4xl">
        <div className="relative flex items-center mb-4">
          <button onClick={goPrev} className="text-2xl cursor-pointer">
            <ChevronLeft />
          </button>
          {currentItem &&
            (["transition", "content", "input"].includes(currentItem.type) ? (
              <div className="absolute left-1/2 -translate-x-1/2">
                <Image src="/logo_white_desktop.webp" alt="Logo" width={120} height={120} className="h-auto w-[120px]" />
              </div>
            ) : (
              <span className="absolute left-1/2 -translate-x-1/2 text-lg text-gray-900 font-medium">
                My Profile
              </span>
            ))}
        </div>

        {!currentItem?.hideBars && renderTopBars()}
      </div>

      <div className="w-full max-w-2xl text-center">
        {!currentItem ? (
          <div>Loading next question...</div>
        ) : (
          <>
            {/* Radio Questions */}
            {currentItem.type === "radio" && (
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6">{currentItem.text}</h2>
                <div className="flex flex-col gap-4">
                    {currentItem.options?.map((opt: string) => (
                    <label
                      key={opt}
                      className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer transition ${
                        answers[currentItem.id] === opt ? "border-blue-600 bg-blue-50" : "border-gray-300"
                      }`}
                      onClick={() => handleRadio(currentItem.id, opt, true)}
                    >
                      <span className="text-left">{opt}</span>
                      <span
                        className={`w-5 h-5 flex items-center justify-center rounded-full border transition ${
                          answers[currentItem.id] === opt ? "bg-blue-600 border-blue-600" : "border-gray-400"
                        }`}
                      >
                        {answers[currentItem.id] === opt && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Yes/No Questions */}
            {currentItem.type === "yesno" && (
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6">{currentItem.text}</h2>
                <div className="flex flex-col gap-4">
                  {currentItem.options?.map((opt: string) => (
                    <label
                      key={opt}
                      className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer transition ${
                        answers[currentItem.id] === opt ? "border-blue-600 bg-blue-50" : "border-gray-300"
                      }`}
                      onClick={() => handleRadio(currentItem.id, opt, true)}
                    >
                      <span className="text-left">{opt}</span>
                      <input
                        type="radio"
                        name={`q-${currentItem.id}`}
                        checked={answers[currentItem.id] === opt}
                        readOnly
                        className="w-5 h-5 text-blue-600"
                      />
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Checkbox Questions */}
            {currentItem.type === "checkbox" && (
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6">{currentItem.text}</h2>
                <div className="flex flex-col gap-4 mb-6">
                  {currentItem.options?.map((opt: string) => {
                    const set = checkboxState[currentItem.id];
                    const checked = set ? set.has(opt) : false;
                    return (
                      <label
                        key={opt}
                        className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer transition ${
                          checked ? "border-blue-600 bg-blue-50" : "border-gray-300"
                        }`}
                        onClick={() => handleCheckboxToggle(currentItem.id, opt)}
                      >
                        <span className="text-left">{opt}</span>
                        <input type="checkbox" checked={checked} readOnly className="w-5 h-5" />
                      </label>
                    );
                  })}
                </div>
                <button
                  onClick={handleContinue}
                  className={`mt-2 w-full py-3 rounded-lg font-semibold ${
                    checkboxState[currentItem.id]?.size > 0
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                  disabled={!checkboxState[currentItem.id] || checkboxState[currentItem.id].size === 0}
                >
                  Continue
                </button>
              </div>
            )}

            {/* Scale Questions */}
            {currentItem.type === "scale" && (
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6">{currentItem.text}</h2>
                {currentItem.textbox && (
                  <div className="p-6 bg-[#edf3ff] border border-blue-400 rounded-lg mb-6">
                    <p className="italic mb-6 text-gray-700">{currentItem.textbox}</p>
                  </div>
                )}
                <div className="flex gap-4 justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      onClick={() => {
                        handleRadio(currentItem.id, String(n), true);
                        saveResponse(currentItem.id, n);
                      }}
                      className="w-18 h-18 bg-[#f3f3f3] cursor-pointer hover:bg-blue-200 rounded-md flex items-center justify-center"
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Transition Pages */}
            {currentItem.type === "transition" && (
              <div className="flex flex-col items-center text-center">
                <div>
                  <Image src="/logo2.png" alt="Logo" width={200} height={200} className="mb-4 text-blue-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">{currentItem.title}</h2>
                {currentItem.image && (
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="w-100 rounded-3xl h-100 md:w-150 md:h-150 mb-6"
                  />
                )}
                {currentItem.description && (
                  <p className="mb-6 whitespace-pre-line text-gray-700">{currentItem.description}</p>
                )}
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
                  <button
                    onClick={handleContinue}
                    className="w-40 bg-blue-600 text-white py-3 rounded-lg font-semibold"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Content Pages */}
            {currentItem.type === "content" && (
              <div className="flex flex-col items-center text-left">
                {currentItem.image && (
                  <img src={currentItem.image} alt={currentItem.title} className="w-28 h-28 mb-4" />
                )}
                {currentItem.title && <h3 className="text-xl font-bold mb-2">{currentItem.title}</h3>}
                {currentItem.paragraphs?.map((p: string, i: number) => (
                  <p key={i} className="text-sm text-gray-700 mb-2 text-left">{p}</p>
                ))}
                <button
                  onClick={handleContinue}
                  className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Input Pages */}
            {currentItem.type === "input" && (
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">{currentItem.title}</h2>
                <input
                  placeholder={currentItem.placeholder || ""}
                  value={answers[currentItem.id] || ""}
                  onChange={(e) => setInput(currentItem.id, e.target.value)}
                  className="w-full border rounded-lg p-3 mb-4"
                  type={currentItem.placeholder?.includes("@") ? "email" : "text"}
                />
                {currentItem.title?.toLowerCase().includes("email") && (
                  <label className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      checked={!!answers[`${currentItem.id}-consent`]}
                      onChange={(e) =>
                        setAnswers(prev => ({ ...prev, [`${currentItem.id}-consent`]: e.target.checked }))
                      }
                    />
                    <span className="text-sm">I agree to receive latest JobEscape news and updates via email</span>
                  </label>
                )}
                <button
                  onClick={handleContinue}
                  className={`mt-2 w-full py-3 rounded-lg font-semibold ${
                    answers[currentItem.id]
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                  disabled={!answers[currentItem.id]}
                >
                  Continue
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}