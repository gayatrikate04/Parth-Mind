"use client";
import { useState } from "react";
import { FaPaperPlane, FaSpotify } from "react-icons/fa";
import axios from "axios";

const ChatMusicRecommender = () => {
  const [messages, setMessages] = useState([
    { text: "Hey there! How are you feeling today? 😊", isBot: true },
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUserMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { text: userInput, isBot: false }];
    setMessages(newMessages);
    setLoading(true);
    await suggestMusic(userInput);
    setUserInput("");
  };

  const suggestMusic = async (userMessage) => {
    try {
      const res = await axios.get(`/api/music/spotify-search`, {
        params: { q: userMessage },
      });

      const { tracks } = res.data;
      const items = tracks?.items || [];

      if (items.length === 0) {
        setMessages((prev) => [
          ...prev,
          { text: "Sorry, no Spotify tracks found. Try again!", isBot: true },
        ]);
        return;
      }

      const botMessage = `Here are some ${userMessage} vibes from Spotify 🎧`;

      const trackMessages = items.map((track) => ({
        text: (
          <div
            key={track.id}
            className="w-64 rounded-2xl shadow-lg bg-white/90 p-3 flex flex-col space-y-2 hover:shadow-2xl transition"
          >
            {/* Album Cover */}
            <img
              src={track.album.images[0]?.url}
              alt={track.name}
              className="w-full h-40 object-cover rounded-xl"
            />

            {/* Track Info */}
            <div>
              <p className="font-semibold text-gray-900 truncate">{track.name}</p>
              <p className="text-sm text-gray-600">
                {track.artists.map((a) => a.name).join(", ")}
              </p>
            </div>

            {/* Preview */}
            {track.preview_url ? (
              <audio
                controls
                className="w-full mt-1 rounded-lg bg-gray-100"
              >
                <source src={track.preview_url} type="audio/mpeg" />
                Your browser does not support audio
              </audio>
            ) : (
              <p className="text-xs text-gray-500">Preview not available</p>
            )}

            {/* Spotify Button */}
            <a
              href={track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-xl mt-2 transition"
            >
              <FaSpotify /> <span>Open in Spotify</span>
            </a>
          </div>
        ),
        isBot: true,
      }));

      setMessages((prev) => [
        ...prev,
        { text: botMessage, isBot: true },
        ...trackMessages,
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { text: "Error fetching Spotify music. Try later!", isBot: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen relative">
      {/* Background Image */}
      <img
        src="/music.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 p-4 shadow-lg">
        <h1 className="text-lg font-semibold text-white">ParthSangeet 🎶</h1>
      </div>

      {/* Chat Messages */}
      <div className="relative z-10 flex-1 mt-4 overflow-auto mb-4 px-4 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-sm ${
                message.isBot
                  ? "bg-white/80 text-gray-800 shadow"
                  : "bg-gradient-to-br from-blue-600 to-green-400 text-white shadow-lg"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="relative bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-3xl z-10 flex items-center space-x-2 p-3 mx-3 mb-4 shadow-xl">
        <input
          type="text"
          className="w-full p-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Type your mood..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          onClick={handleUserMessage}
          className="ml-2 p-3 bg-[#1E7F5C] hover:bg-[#175344] text-white rounded-full shadow-lg hover:shadow-xl transition duration-200"
          disabled={loading}
        >
          {loading ? "..." : <FaPaperPlane size={20} />}
        </button>
      </div>
    </div>
  );
};

export default ChatMusicRecommender;