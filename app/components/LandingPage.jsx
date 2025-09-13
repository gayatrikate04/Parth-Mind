'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import 'animate.css';
import Navbar from './Navbar';

const LandingPage = () => {
    const router = useRouter();

    const texts = [
        "Why overthink when your friend is always by your side? Let’s let go of those thoughts together.",
        "Your thoughts don’t have to weigh you down. Let’s navigate them together, one step at a time.",
        "Lost in thoughts? Don't worry, I’m here to listen. Let’s find clarity together.",
        "Calm your mind, embrace peace. Every question has an answer, and I’m here to help you find it.",
        "You are not alone in your thoughts. Let’s talk and lighten the load."
    ];

    const [randomText, setRandomText] = useState("");
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * texts.length);
        setRandomText(texts[randomIndex]);
    }, []);

    // Handle scroll visibility
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div><Navbar /></div>
            
            {/* Hero Section */}
            <div className="relative h-screen">
                <img src="main.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        Welcome to <span className="from-blue-500 to-green-400 ">ParthMind</span>!
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-gray-300 mb-6 animate__animated animate__fadeIn animate__delay-0.5s">
                        {randomText}
                    </p>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => router.push("/Chat")}
                            type="button"
                            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                        >
                            Try it
                        </button>
                        <button
                            onClick={() => router.push("/signup")}
                            type="button"
                            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-black text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8">Meet Your Mindful Companion</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {[
                            { icon: "💬", title: "Friendly Chat Support", description: "Share your thoughts and receive comforting responses." },
                            { icon: "🎵", title: "Song Recommendations", description: "Mood-based songs to uplift your spirits." },
                            { icon: "📝", title: "Activity Suggestions", description: "Practical ideas to clear your mind and stay engaged." },
                            { icon: "✨", title: "Affirmation Generator", description: "Provide daily positive affirmations to boost mental well-being and positivity." },
                            { icon: "🤖", title: "AI-Powered Insights", description: "Intelligent responses tailored to your emotions." },
                            { icon: "📔", title: "Emotion Diary", description: "Write down your emotions and thoughts to reflect and gain clarity." },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-2xl p-6 text-left hover:bg-green-800 transition duration-300 shadow-md hover:shadow-lg hover:scale-105"
                            >
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className='bg-black py-12 text-center text-white'>
                <h2 className='text-3xl font-bold mb-4'>Ready to start your journey with ParthMind?</h2>
                <p className="text-lg mb-6">
                    Take a step towards a more positive and clear mindset with personalized support.
                </p>
                <div className="flex justify-center gap-6">
                    <button
                        onClick={() => router.push("/signup")}
                        type="button"
                        className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black py-8 text-center text-white relative">
                <p className="text-lg mb-4">© 2025 ParthMind. All Rights Reserved.</p>
                <div className="flex justify-center gap-6">
                    <button onClick={() => router.push("/about")} className="hover:underline">About</button>
                    <button onClick={() => router.push("/Privacy-policy")} className="hover:underline">Privacy Policy</button>
                    <button onClick={() => router.push("/terms")} className="hover:underline">Terms of Service</button>
                </div>
            </footer>

            {/* Back to Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default LandingPage;
