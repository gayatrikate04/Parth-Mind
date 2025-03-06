"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; // ✅ Corrected
const BASE_URL = "https://www.googleapis.com/youtube/v3";

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
            const response = await axios.get(`${BASE_URL}/search`, {
                params: {
                    part: "snippet",
                    q: `${userMessage} music`,
                    type: "video",
                    videoCategoryId: 10, // Music category
                    key: API_KEY,
                    maxResults: 3, // Show 3 songs
                },
            });

            const videos = response.data.items;

            if (!videos || videos.length === 0) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: "Sorry, I couldn't find any music for this mood. Try another one!", isBot: true },
                ]);
                return;
            }

            const botMessage = `I've found some ${userMessage} tracks for you! 🎶`;
            const songMessages = videos.map((video) => ({
                text: (
                    <iframe
                        key={video.id.videoId}
                        width="280"
                        height="158"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                ),
                isBot: true,
            }));

            setMessages((prevMessages) => [...prevMessages, { text: botMessage, isBot: true }, ...songMessages]);
        } catch (error) {
            console.error("Error fetching music recommendations:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Sorry, there was an error fetching the music. Please try again later.", isBot: true },
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

            <div className="relative z-10 flex items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 p-4 shadow-lg">
                <h1 className="text-lg font-semibold text-white">ParthSangeet 🎶</h1>
            </div>

            <div className="relative z-10 flex-1 mt-4 overflow-auto mb-4 px-4">
                {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.isBot ? "justify-start" : "justify-end"} mb-3`}>
                        <div
                            className={`px-4 py-2 rounded-lg max-w-xs ${
                                message.isBot
                                    ? "bg-gradient-to-br from-green-400 to-blue-600 text-gray-800"
                                    : "bg-gradient-to-br from-blue-600 to-green-400 text-white"
                            }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-3xl z-10 flex items-center space-x-2 p-3 mx-3 mb-4">
                <input
                    type="text"
                    className="w-full p-2 border rounded-3xl"
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