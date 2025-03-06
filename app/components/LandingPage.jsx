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

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * texts.length);
        setRandomText(texts[randomIndex]);
    }, []);

    return (
        <>
            <div>  <Navbar /> </div>
            {/* Hero section */}
            <div className="relative h-screen">
                <img src="main.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        Welcome to <span className="from-blue-500 to-green-400 ">ParthMind</span>!
                    </h1>

                    <p className="text-xl md:text-2xl font-light text-gray-300 text-2xl text-size-100 mb-6 animate__animated animate__fadeIn animate__delay-0.5s">{randomText}</p>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => router.push("/Chat")}
                            type="button"
                            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                        >
                            Try it
                        </button>

                        <button
                            onClick={() => router.push("/signup")}
                            type="button"
                            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>


            {/* Custom animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1.5s ease-out;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-in;
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>

            {/* Features section */}
            <div className="bg-black text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8">Meet Your Mindful Companion</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {[
                            {
                                icon: "💬",
                                title: "Friendly Chat Support",
                                description:
                                    "Share your thoughts and receive comforting responses.",
                            },
                            {
                                icon: "🎵",
                                title: "Song Recommendations",
                                description: "Mood-based songs to uplift your spirits.",
                            },
                            {
                                icon: "📝",
                                title: "Activity Suggestions",
                                description:
                                    "Practical ideas to clear your mind and stay engaged.",
                            },
                            {
                                icon: "✨",
                                title: "Affirmation Generator",
                                description: "Provide daily positive affirmations to boost mental well-being and positivity.",
                            },
                            {
                                icon: "🤖",
                                title: "AI-Powered Insights",
                                description:
                                    "Intelligent responses tailored to your emotions.",
                            },
                            {
                                icon: "📔",
                                title: "Emotion Diary",
                                description:
                                    "Write down your emotions and thoughts to reflect and gain clarity. Journaling helps you express yourself freely and organize your feelings.",
                            },
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

            {/* Call to action */}
            <div className='bg-black py-12 text-center text-white'>
                <h2 className='text-3xl font-bold text-text mb-4'>Ready to start your journey with ParthMind?</h2>
                <p className="text-lg text-text mb-6">
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

            {/* Footer section */}
            <footer className="bg-black py-8 text-center text-white">
                <p className="text-lg mb-4">© 2025 ParthMind. All Rights Reserved.</p>
                <div className="flex justify-center gap-6">
                    <button
                        onClick={() => router.push("/about")}
                        type="button"
                        className="hover:underline transition duration-300"
                    >
                        About
                    </button>

                    <button
                        onClick={() => router.push("/Privacy-policy")}
                        type="button"
                        className="hover:underline transition duration-300"
                    >
                        Privacy Policy
                    </button>

                    <button
                        onClick={() => router.push("/terms")}
                        type="button"
                        className="hover:underline transition duration-300"
                    >
                        Terms of Service
                    </button>
                </div>
            </footer>
        </>
    );
};

export default LandingPage;