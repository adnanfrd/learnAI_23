"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Paperclip, Mic, Smile, Send, X } from "lucide-react";

const emojis = ["😀", "😂", "🥳", "😍", "👍", "🎉", "🙏", "🔥"];

export default function SupportButton({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot" | "typing" }[]
  >([]);
  const [input, setInput] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: "user" as const };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setShowEmoji(false);

    setMessages((prev) => [...prev, { text: "", sender: "typing" }]);

    setTimeout(() => {
      setMessages((prev) => {
        const filtered = prev.filter((m) => m.sender !== "typing");
        return [
          ...filtered,
          {
            text: "Thanks for reaching out! Our team will reply shortly. 🚀",
            sender: "bot",
          },
        ];
      });
    }, 5000);
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="Support"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 z-10 right-6 w-80 sm:w-96 h-[480px] bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden"
          >
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img
                    src="/photo.png"
                    alt="avatar"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="/photo1.png"
                    alt="avatar"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="/app-icon.png"
                    alt="avatar"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
                <span className="font-semibold">Jobescape.me</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white text-lg"
              >
                &times;
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 text-sm">
              {messages.length === 0 ? (
                <>
                  <div className="bg-white shadow-sm p-3 rounded-lg mb-3">
                    <p className="text-gray-700">
                      Please describe your issue in detail.
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      This will help Support Team resolve the situation as
                      quickly as possible ⭐
                    </p>
                  </div>
                  <p className="text-xs text-gray-400">
                    Waiting for a teammate...
                  </p>
                </>
              ) : (
                messages.map((msg, idx) => {
                  if (msg.sender === "typing") {
                    return (
                      <div
                        key={idx}
                        className="mr-auto bg-gray-200 text-gray-800 p-2 rounded-lg flex space-x-1 w-14 justify-center"
                      >
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150" />
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300" />
                      </div>
                    );
                  }
                  return (
                    <div
                      key={idx}
                      className={`mb-2 p-2 rounded-lg max-w-[80%] ${
                        msg.sender === "user"
                          ? "ml-auto bg-blue-600 text-white"
                          : "mr-auto bg-gray-200 text-gray-800"
                      }`}
                    >
                      {msg.text}
                    </div>
                  );
                })
              )}
            </div>

            {showEmoji && (
              <div className="absolute bottom-24 right-6 bg-white border rounded-lg shadow p-2 grid grid-cols-4 gap-2">
                {emojis.map((e, i) => (
                  <button
                    key={i}
                    className="text-xl"
                    onClick={() => setInput((prev) => prev + e)}
                  >
                    {e}
                  </button>
                ))}
              </div>
            )}

            <div className="border-t p-2 flex flex-col space-y-2">
              <div className="flex items-center space-x-3 px-1">
                <button
                  className="p-2 text-gray-500 hover:text-blue-600"
                  onClick={() => setShowEmoji((prev) => !prev)}
                >
                  <Smile size={20} />
                </button>

                <label className="p-2 text-gray-500 hover:text-blue-600 cursor-pointer">
                  <span className="text-xs font-semibold">GIF</span>
                  <input type="file" accept="image/gif" className="hidden" />
                </label>

                <label className="p-2 text-gray-500 hover:text-blue-600 cursor-pointer">
                  <Paperclip size={20} />
                  <input type="file" className="hidden" />
                </label>

                <label className="p-2 text-gray-500 hover:text-blue-600 cursor-pointer">
                  <Mic size={20} />
                  <input type="file" accept="audio/*" className="hidden" />
                </label>
              </div>

              <div className="flex items-center border-2 border-blue-500 rounded-full px-3 py-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Message..."
                  className="flex-1 text-sm focus:outline-none"
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 flex-shrink-0"
                  onClick={sendMessage}
                >
                  <Send size={18} />
                </button>
              </div>

              <div className="text-center text-xs text-gray-400">
                Powered by Fin
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
