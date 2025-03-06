"use client";
import React, { useRef } from "react";
import { UserCircle, MessageSquareText, NotebookText, Music, Image } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const router = useRouter();

    // Reference for Feature Cards section
    const featureSectionRef = useRef(null);

    const handleScrollToFeatures = () => {
        featureSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="h-full w-full bg-gradient-to-br from-[#132244] via-[#0c5d47] to-[#128563] text-white p-6">
            {/* Navbar */}
            <div className="flex justify-between items-center bg-[#A5D6A7] p-4 rounded-2xl shadow-md">
                <h1 className="text-2xl font-semibold text-gray-900">ParthMind</h1>
                
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-20 pt-3">
                {/* Left Side - Text Content */}
                <div className="max-w-lg text-center lg:text-left pl-4 lg:pl-20">
                    <h1 className="text-5xl font-bold leading-tight text-white">
                        Express Yourself <br />
                        and Find <span className="text-green-300">Inner Peace</span> ✨
                    </h1>
                    <p className="text-lg text-gray-300 mt-4 w-full max-w-3xl text-left">
                        ParthMind helps you overcome overthinking and stress with AI-powered conversations, journaling, and relaxation techniques. It provides a safe space to express your thoughts, gain clarity, and find comfort through meaningful interactions. With personalized suggestions, music therapy, and creative exercises, ParthMind encourages self-reflection and emotional well-being.
                    </p>

                    {/* Updated Button with Scroll Effect */}
                    <button
                        onClick={handleScrollToFeatures}
                        className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        Get Started
                    </button>
                </div>

                {/* Right Side - Chat UI & Avatars */}
                <div className="relative lg:mt-0 mr-20 flex justify-end">
                    <div className="bg-white text-black p-6 rounded-2xl shadow-2xl w-full lg:w-[450px] h-[450px] border border-gray-500 relative">
                        <div className="flex flex-col space-x-2">
                            <div className="flex flex-row gap-1">
                                <img className="w-8 h-8 rounded-full" src="profilephoto.png" alt="Profile" />
                                <span className="text-gray-700 text-lg font-bold">Keshav</span>
                            </div>
                            <div className="flex gap-1 mr-20 flex-row">
                                <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                                <span>Online</span>
                            </div>
                        </div>

                        {/* Chat Messages */}
                        <div className="mt-10">
                            <p className="flex flex-col leading-1.5 p-4 mr-10 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl bg-gradient-to-r from-teal-200 to-lime-200">
                                <b>ParthMind:</b> How's your day? I'm here to listen! 💙
                            </p>
                            <p className="flex flex-col leading-1.5 ml-10 mt-5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-ee-xl bg-gradient-to-r from-teal-200 to-lime-200">
                                <b>You:</b> I feel overwhelmed today...
                            </p>
                        </div>

                        {/* Input Box Section */}
                        <div className="mt-10 p-2 border-t border-gray-200 bg-white flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                            />
                            <button className="ml-2 p-2 bg-[#90f3cb] rounded-full text-white">
                                <FaPaperPlane size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Cards Section */}
            <div ref={featureSectionRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-40">
                <FeatureCard
                    icon={<MessageSquareText size={40} />}
                    title="Chat with Keshav"
                    description="Express your thoughts and feel heard."
                    buttonText="Start Chat"
                    onClick={() => router.push("/Chat-Pro")}
                />
                <FeatureCard
                    icon={<NotebookText size={40} />}
                    title="ParthDiary"
                    description="Write Your Feelings"
                    buttonText="Start Writing"
                    onClick={() => router.push("/Diary")}
                />
                <FeatureCard
                    icon={<Music size={40} />}
                    title="ParthSangeet"
                    description="Music Therapy : Relax with soothing tunes."
                    buttonText="Listen Now"
                    onClick={() => router.push("/Music")}
                />
            </div>
        </div>
    );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, buttonText, onClick }) => {
    return (
        <div className="bg-gradient-to-br from-lime-200 to-emerald-300 text-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center 
                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            {icon}
            <h2 className="text-lg font-semibold mt-3">{title}</h2>
            <p className="text-sm text-center mt-2">{description}</p>
            <button
                onClick={onClick}
                className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg
                               transition-all duration-300 transform hover:-translate-y-1">
                {buttonText}
            </button>
        </div>
    );
};

export default Dashboard;
