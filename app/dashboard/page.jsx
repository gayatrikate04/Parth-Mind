"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  User,
  MessageSquareText,
  NotebookText,
  Music,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import LoadingSpinner from "../components/LoadingSpinner";

const Dashboard = () => {
  const router = useRouter();
  const featureSectionRef = useRef(null);
  const user = useSession();
  const [loading, setLoading] = useState(true);
  const [loggedIn, setIsLoggedIn] = useState(false);

  // Profile state
  const [showProfile, setShowProfile] = useState(false);
  const [fullName, setFullName] = useState("");
  const [about, setAbout] = useState("I love using ParthMind 💚");
  const [profilePic, setProfilePic] = useState("/default-avatar.png");
  const [joinedDate, setJoinedDate] = useState("");

  useEffect(() => {
    setLoading(true);
    if (user.status === "authenticated") {
      setIsLoggedIn(true);
      setFullName(user.data?.user?.name || "");
      setJoinedDate(
        new Date(user.data?.user?.createdAt || Date.now()).toLocaleDateString(
          "en-US",
          { year: "numeric", month: "long", day: "numeric" }
        )
      );
    } else {
      // temporary until backend integration
      setIsLoggedIn(true);
      setFullName("User");
      setJoinedDate(
        new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }
    setLoading(false);
  }, [user]);

  const handleScrollToFeatures = () => {
    featureSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSignOut = () => {
    signOut({ redirect: false });
    router.push("/");
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSaveProfile = () => {
    // Later integrate with backend (update user info)
    console.log("Profile saved:", { fullName, about, profilePic });
    setShowProfile(false);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (loggedIn) {
    return (
      <div className="h-full w-full bg-gradient-to-br from-[#132244] via-[#0c5d47] to-[#128563] text-white p-6">
        {/* Navbar */}
        <div className="flex justify-between items-center bg-[#A5D6A7] p-4 rounded-2xl shadow-md">
          <h1 className="text-2xl font-semibold text-gray-900">ParthMind</h1>
          <div className="flex items-center gap-4">
            {/* Attractive Profile Button */}
            <button
              onClick={() => setShowProfile(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full 
                         bg-gradient-to-r from-green-400 to-green-600 
                         text-white font-medium shadow-md hover:shadow-lg 
                         transition-transform transform hover:scale-105"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-green-600 shadow">
                <User size={20} />
              </span>
              Profile
            </button>

            <button
              onClick={handleSignOut}
              className="bg-slate-900 text-white rounded-md font-semibold shadow-md px-6 py-2"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Profile Modal */}
        {showProfile && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gradient-to-br from-[#132244] via-[#0c5d47] to-[#128563] text-white w-[400px] p-6 rounded-2xl shadow-xl relative">
              <button
                onClick={() => setShowProfile(false)}
                className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl"
              >
                ✖
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center">
                User Profile
              </h2>

              {/* Profile Picture */}
              <div className="flex flex-col items-center">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="mt-2 text-sm"
                  onChange={handleImageChange}
                />
              </div>

              {/* Info */}
              <div className="mt-4 space-y-3">
                <div>
                  <label className="text-sm font-semibold">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2 border rounded-lg mt-1 text-black"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Email</label>
                  <input
                    type="email"
                    value={user.data?.user?.email || "user@example.com"}
                    readOnly
                    className="w-full p-2 border rounded-lg mt-1 bg-gray-100 text-black"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">About Me</label>
                  <textarea
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    rows="3"
                    className="w-full p-2 border rounded-lg mt-1 text-black"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Joined Date</label>
                  <input
                    type="text"
                    value={joinedDate}
                    readOnly
                    className="w-full p-2 border rounded-lg mt-1 bg-gray-100 text-black"
                  />
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={handleSaveProfile}
                className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-20 pt-3">
          {/* Left Side - Text Content */}
          <div className="max-w-lg text-center lg:text-left pl-4 lg:pl-20">
            <h1 className="text-5xl font-bold leading-tight text-white">
              Express Yourself <br />
              and Find <span className="text-green-300">Inner Peace</span> ✨
            </h1>
            <p className="text-lg text-gray-300 mt-4 w-full max-w-3xl text-left">
              ParthMind helps you overcome overthinking and stress with
              AI-powered conversations, journaling, and relaxation techniques.
              It provides a safe space to express your thoughts, gain clarity,
              and find comfort through meaningful interactions.
            </p>
            <button
              onClick={handleScrollToFeatures}
              className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div
          ref={featureSectionRef}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-40"
        >
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
  }
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, buttonText, onClick }) => {
  return (
    <div className="bg-gradient-to-br from-lime-200 to-emerald-300 text-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
      {icon}
      <h2 className="text-lg font-semibold mt-3">{title}</h2>
      <p className="text-sm text-center mt-2">{description}</p>
      <button
        onClick={onClick}
        className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Dashboard;
