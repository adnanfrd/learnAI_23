"use client";

import { useEffect, useState } from "react";
import type { QuizApiResponse, AdminUserData, AdminStepData } from "@/lib/types/quiz";

interface UserResponse {
  item_id: string;
  response: string;
  response_type: string;
  answered_at: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'quiz' | 'items' | 'users'>('quiz');

  // Quiz Data
  const [quizData, setQuizData] = useState<QuizApiResponse | null>(null);
  const [steps, setSteps] = useState<AdminStepData[]>([]);

  // User Data
  const [users, setUsers] = useState<AdminUserData[]>([]);

  // Edit States
  const [editingStep, setEditingStep] = useState<AdminStepData | null>(null);
  const [editingItem, setEditingItem] = useState<any>(null); // Replace 'any' with the correct item type if available, e.g. QuizItemData

  // Modal States
  const [selectedUser, setSelectedUser] = useState<AdminUserData | null>(null);
  const [userResponses, setUserResponses] = useState<UserResponse[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuizData();
    fetchSteps();
    fetchUsers();
  }, []);

  // Fetch quiz data (same API you're using for customer)
  async function fetchQuizData() {
    try {
      const res = await fetch("/api/quiz");
      const data: QuizApiResponse = await res.json();
      setQuizData(data);
    } catch (err) {
      console.error("Failed to fetch quiz data", err);
    }
  }

  async function fetchSteps() {
    try {
      const res = await fetch("/api/quiz/steps");
      const data = await res.json() as { success: boolean; steps: AdminStepData[] };
      if (data.success) setSteps(data.steps);
    } catch (err) {
      console.error("Failed to fetch steps", err);
    }
  }

  async function fetchUsers() {
    setLoading(true);
    try {
      const res = await fetch("/api/quiz/users");
      const data = await res.json() as { success: boolean; users: AdminUserData[] };
      if (data.success) setUsers(data.users);
    } catch (err) {
      console.error("Failed to fetch users", err);
    } finally {
      setLoading(false);
    }
  }

  // Fetch user responses for modal
  async function fetchUserResponses(sessionId: string) {
    try {
      const res = await fetch(`/api/quiz/users/${sessionId}/responses`);
      const data = await res.json() as { success: boolean; responses: UserResponse[] };
      if (data.success) {
        setUserResponses(data.responses);
      }
    } catch (err) {
      console.error("Failed to fetch user responses", err);
    }
  }

  // Update step
  async function updateStep(step: AdminStepData) {
    try {
      const res = await fetch("/api/quiz/steps", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(step),
      });

      if (res.ok) {
        fetchSteps();
        setEditingStep(null);
        alert("Step updated successfully!");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update step");
    }
  }

  // Update item (question)
  async function updateItem(item: unknown) {
    try {
      const res = await fetch("/api/quiz/items", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });

      if (res.ok) {
        fetchQuizData();
        setEditingItem(null);
        alert("Question updated successfully!");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update question");
    }
  }

  // Show user responses modal
  function showUserModal(user: AdminUserData) {
    setSelectedUser(user);
    setShowModal(true);
    fetchUserResponses(user.session_id);
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Fixed Header */}
      <div className="bg-white border-b px-6 py-4 shrink-0">
        <h1 className="text-3xl font-bold">Quiz Admin Dashboard</h1>
      </div>

      {/* Fixed Tab Navigation */}
      <div className="bg-white border-b px-6 py-2 shrink-0">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-t ${activeTab === 'quiz' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
          >
            Quiz Overview ({quizData?.count?.steps || 0} steps, {quizData?.count?.items || 0} items)
          </button>
          <button
            onClick={() => setActiveTab('items')}
            className={`px-4 py-2 rounded-t ${activeTab === 'items' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
          >
            Edit Questions ({quizData?.count?.items || 0})
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded-t ${activeTab === 'users' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
          >
            User Responses ({users.length})
          </button>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-auto">
        <div className="p-6 max-w-7xl mx-auto">

          {/* Quiz Overview Tab */}
          {activeTab === 'quiz' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Quiz Overview</h2>

              {quizData?.success ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="font-bold text-lg">Steps</h3>
                    <p className="text-2xl">{quizData.count.steps}</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="font-bold text-lg">Questions</h3>
                    <p className="text-2xl">{quizData.count.items}</p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <h3 className="font-bold text-lg">Options</h3>
                    <p className="text-2xl">{quizData.count.options}</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <h3 className="font-bold text-lg">Users</h3>
                    <p className="text-2xl">{users.length}</p>
                  </div>
                </div>
              ) : (
                <p>Loading quiz data...</p>
              )}

              {/* Steps List */}
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.step_id} className="border p-4 rounded-lg bg-white shadow">
                    {editingStep?.step_id === step.step_id ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={editingStep.title}
                          onChange={(e) => setEditingStep({ ...editingStep, title: e.target.value })}
                          className="border p-2 rounded w-full text-lg font-bold"
                        />
                        <input
                          type="number"
                          value={editingStep.order}
                          onChange={(e) => setEditingStep({ ...editingStep, order: parseInt(e.target.value) })}
                          className="border p-2 rounded w-20"
                        />
                        <div className="space-x-2">
                          <button
                            onClick={() => updateStep(editingStep)}
                            className="px-3 py-1 bg-green-500 text-white rounded"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingStep(null)}
                            className="px-3 py-1 bg-gray-500 text-white rounded"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-xl">{step.title}</h3>
                          <p className="text-gray-600">
                            ID: {step.step_id} | Order: {step.order} | Items: {step.item_count}
                          </p>
                        </div>
                        <div className="space-x-2">
                          <button
                            onClick={() => setEditingStep(step)}
                            className="px-3 py-1 bg-yellow-500 text-white rounded"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Items Tab */}
          {activeTab === 'items' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Edit Questions</h2>

              {quizData?.data?.steps?.map((step) => {
                const stepItems = quizData.data.items.filter((item) => item.step_id === step.step_id);

                return (
                  <div key={step.step_id} className="mb-8">
                    <h3 className="text-xl font-bold mb-4 bg-gray-100 p-3 rounded sticky top-0">
                      {step.title} ({stepItems.length} items)
                    </h3>

                    <div className="space-y-3">
                      {stepItems.map((item) => (
                        <div key={item.item_id} className="border p-3 rounded bg-white shadow-sm">
                          {editingItem?.item_id === item.item_id ? (
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                  {item.type}
                                </span>
                                <span className="text-gray-500">#{item.order}</span>
                                <strong>{item.item_id}</strong>
                              </div>

                              {item.text && (
                                <div>
                                  <label className="block text-sm font-medium mb-1">Question Text:</label>
                                  <textarea
                                    value={editingItem.text || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, text: e.target.value })}
                                    className="w-full border p-2 rounded"
                                    rows={3}
                                  />
                                </div>
                              )}

                              {item.title && (
                                <div>
                                  <label className="block text-sm font-medium mb-1">Title:</label>
                                  <input
                                    type="text"
                                    value={editingItem.title || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                                    className="w-full border p-2 rounded"
                                  />
                                </div>
                              )}

                              {item.description && (
                                <div>
                                  <label className="block text-sm font-medium mb-1">Description:</label>
                                  <textarea
                                    value={editingItem.description || ''}
                                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                                    className="w-full border p-2 rounded"
                                    rows={2}
                                  />
                                </div>
                              )}

                              {/* Edit Options for radio, checkbox, yesno types */}
                              {(item.type === 'radio' || item.type === 'checkbox' || item.type === 'yesno') && (
                                <div>
                                  <label className="block text-sm font-medium mb-2">Options:</label>
                                  <div className="space-y-2">
                                    {editingItem.options?.map((option: any, optIndex: number) => (
                                      <div key={option.id} className="flex items-center gap-2">
                                        <input
                                          type="text"
                                          value={option.option_text}
                                          onChange={(e) => {
                                            const newOptions = [...editingItem.options];
                                            newOptions[optIndex].option_text = e.target.value;
                                            setEditingItem({ ...editingItem, options: newOptions });
                                          }}
                                          className="flex-1 border p-2 rounded text-sm"
                                          placeholder="Option text"
                                        />
                                        <button
                                          onClick={() => {
                                            const newOptions = editingItem.options.filter((_: any, i: number) => i !== optIndex);
                                            setEditingItem({ ...editingItem, options: newOptions });
                                          }}
                                          className="px-2 py-1 bg-red-500 text-white rounded text-sm"
                                        >
                                          Delete
                                        </button>
                                      </div>
                                    ))}
                                    <button
                                      onClick={() => {
                                        const newOption = {
                                          id: `new_${Date.now()}`,
                                          item_id: item.item_id,
                                          option_text: 'New Option',
                                          order: (editingItem.options?.length || 0) + 1
                                        };
                                        setEditingItem({
                                          ...editingItem,
                                          options: [...(editingItem.options || []), newOption]
                                        });
                                      }}
                                      className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                                    >
                                      + Add Option
                                    </button>
                                  </div>
                                </div>
                              )}

                              <div className="space-x-2">
                                <button
                                  onClick={() => updateItem(editingItem)}
                                  className="px-3 py-1 bg-green-500 text-white rounded"
                                >
                                  Save
                                </button>
                                <button
                                  onClick={() => setEditingItem(null)}
                                  className="px-3 py-1 bg-gray-500 text-white rounded"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                    {item.type}
                                  </span>
                                  <span className="text-gray-500">#{item.order}</span>
                                  <strong>{item.item_id}</strong>
                                </div>

                                {item.text && <p className="mb-1"><strong>Question:</strong> {item.text}</p>}
                                {item.title && <p className="mb-1"><strong>Title:</strong> {item.title}</p>}
                                {item.description && <p className="mb-1"><strong>Description:</strong> {item.description}</p>}

                                {/* Show options */}
                                {(item.type === 'radio' || item.type === 'checkbox' || item.type === 'yesno') && (
                                  <div className="mb-1">
                                    <strong>Options:</strong>
                                    <ul className="list-disc pl-6 text-sm">
                                      {quizData.data.options
                                        .filter((opt) => opt.item_id === item.item_id)
                                        .map((opt) => (
                                          <li key={opt.id}>{opt.option_text}</li>
                                        ))}
                                    </ul>
                                  </div>
                                )}
                              </div>

                              <div className="space-x-2">
                                <button
                                  onClick={() => {
                                    const itemOptions = quizData?.data.options.filter(opt => opt.item_id === item.item_id) || [];
                                    setEditingItem({ ...item, options: itemOptions });
                                  }}
                                  className="px-3 py-1 bg-yellow-500 text-white rounded text-sm"
                                >
                                  Edit
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">User Responses</h2>

              {loading ? (
                <p>Loading user data...</p>
              ) : (
                <div className="bg-white rounded-lg shadow">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-50 sticky top-0">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Started</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responses</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                          <tr key={user.session_id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 whitespace-nowrap">{user.user_name || 'N/A'}</td>
                            <td className="px-4 py-3 whitespace-nowrap">{user.user_email || 'N/A'}</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              {new Date(user.started_at).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              {user.completed_at ? new Date(user.completed_at).toLocaleDateString() : 'N/A'}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className={`px-2 py-1 rounded-full text-xs ${user.is_completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                {user.is_completed ? 'Completed' : 'In Progress'}
                              </span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                {user.total_responses} answers
                              </span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <button
                                onClick={() => showUserModal(user)}
                                className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {users.length === 0 && (
                      <div className="text-center py-8 text-gray-500">No user data found</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* User Response Modal */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col">
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">User Responses</h3>
                <p className="text-gray-600">
                  {selectedUser.user_name} ({selectedUser.user_email})
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-auto p-6">
              {userResponses.length > 0 ? (
                <div className="space-y-4">
                  {userResponses.map((response, index) => (
                    <div key={index} className="border p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                            {response.response_type}
                          </span>
                          <strong>Question #{response.item_id}</strong>
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(response.answered_at).toLocaleString()}
                        </span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <strong>Answer:</strong> {response.response}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center py-8 text-gray-500">Loading responses...</p>
              )}
            </div>

            <div className="px-6 py-4 border-t bg-gray-50">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}