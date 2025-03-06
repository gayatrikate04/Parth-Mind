"use client";
import { useState, useEffect, useRef } from "react";
import { FaRegSmile, FaPaperPlane } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import EmojiPicker from "emoji-picker-react";

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "Keshav",
      text: "Hey there! I'm Keshav. I'm here to listen and help. How are you feeling today?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    // Create a ref for the messages container
    const messagesEndRef = useRef(null);

    // Scroll to bottom when messages update
    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);



  const handleSubmit = async () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();
    if (userMessage.includes("your name") || userMessage.includes("who are you")) {
      setMessages((prev) => [...prev, { sender: "You", text: input }]);
      setInput("");
  
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "Keshav", text: "My name is Keshav." }]);
      }, 1000); 
      return;
    }

    setLoading(true);
    setTyping(true);

    setMessages((prev) => [...prev, { sender: "You", text: input }]);
    setInput("");

    try {
      const res = await fetch("/api/chat/mistral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput: input }),
      });

      if (!res.ok) throw new Error(`Error: ${res.statusText}`);

      const data = await res.json();

      setMessages((prev) => [...prev, { sender: "Keshav", text: data.response }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "Keshav", text: "Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
      setTyping(false);
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setInput((prevInput) => prevInput + emojiObject.emoji);
  };

  return (
    <div className="h-screen flex flex-col justify-between ">
      {/* Navbar */}
      <div className="flex items-center justify-between bg-gradient-to-br from-[#1B3A4B] via-[#145C4B] to-[#1E7F5C] p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <img src="profilephoto.png" alt="profile" className="w-10 h-10 rounded-full" />
          <h1 className="text-lg font-semibold text-white">Keshav</h1>
        </div>
      </div>

      {/* Chat Messages Section */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-2.5 mb-2 ${msg.sender === "You" ? "justify-end" : ""}`}
          >
            {msg.sender !== "You" && (
              <img className="w-8 h-8 rounded-full" src="profilephoto.png" alt="Profile" />
            )}
            <div
              className={`relative px-3 py-2 rounded-lg text-sm shadow-md bg-gradient-to-r ${
                msg.sender === "You"
                  ? "from-teal-200 to-cyan-300 rounded-br-none"
                  : "from-teal-200 to-lime-200 rounded-bl-none"
              }`}
              style={{
                maxWidth: "75%",
                minWidth: "50px",
                wordWrap: "break-word",
              }}
            >
              <span className="block font-semibold">{msg.sender}</span>

              <div className="text-gray-900">
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {typing && (
          <div className="flex items-start gap-2.5">
            <img className="w-8 h-8 rounded-full" src="profilephoto.png" alt="Profile" />
            <div className="relative px-3 py-2 rounded-lg text-sm shadow-md bg-gradient-to-r from-teal-200 to-lime-200 rounded-bl-none">
              <span className="block font-semibold">Keshav</span>
              <div className="text-gray-900 italic">Typing...</div>
            </div>
          </div>
        )}

        {/* Scroll to bottom */}
        <div ref={messagesEndRef}></div>
        
      </div>

      {/* Chat Input & Emoji Picker */}
      <div className="relative bg-white border-t border-[#1E7F5C] shadow-lg rounded-t-2xl p-3">
        <div className="flex items-center relative">
          {/* Emoji Button */}
          <button
            className="p-2 text-[#1E7F5C] hover:text-[#A7F3D0] transition duration-200"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <FaRegSmile size={24} />
          </button>

          {/* Chat Input */}
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            className="flex-1 px-4 py-3 bg-white text-black border border-[#1E7F5C] rounded-full outline-none focus:ring-2 focus:ring-[#A7F3D0] transition duration-200"
            disabled={loading}
          />

          {/* Send Button */}
          <button
            onClick={handleSubmit}
            className="ml-2 p-3 bg-[#1E7F5C] hover:bg-[#175344] text-white rounded-full shadow-lg hover:shadow-xl transition duration-200"
            disabled={loading}
          >
            {loading ? "..." : <FaPaperPlane size={20} />}
          </button>
        </div>

        {/* Emoji Picker - Appears Below Input */}
        {showEmojiPicker && (
          <div className="absolute left-0 w-full bg-white shadow-lg rounded-lg z-50">
            <EmojiPicker onEmojiClick={handleEmojiClick} width="100%" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
