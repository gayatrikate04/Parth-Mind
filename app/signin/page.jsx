"use client";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react"; // Import NextAuth signIn function
import { FaGoogle, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SignInWithCredentials from "../components/auth/SignInWithCredentials";
import { useSession } from "next-auth/react";
import LoadingSpinner from "../components/LoadingSpinner";
export default function SignIn() {
  const user = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (user.status === "authenticated") {
      router.push("/dashboard");
    }
    setLoading(false);
  }, [user]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreed: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault(); // Prevent form from reloading
    if (!formData.email) {
      setError("Please enter your email.");
    } else {
      setError(""); // Clear error if email is entered
      router.push("/dashboard"); // Redirect to password page
    }
  };
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#090021] text-white relative overflow-hidden">
      <img
        src="loginbg.jpg"
        alt="Background"
        className="absolute opacity-50 inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b opacity-50"></div>
      <div className="relative z-10 w-full max-w-md p-8 rounded-xl bg-black bg-opacity-30 shadow-lg border-green-300">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-xl">
            <img
              className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-xl"
              src="logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold">
          Welcome back to ParthMind ✨
        </h2>

        <SignInWithCredentials />
        <p className="justify-center flex items-center mt-2">OR</p>

        <div className="flex flex-col justify-center mt-4 space-y-3 text-md">
          {/* Google OAuth Signup */}
          <button
            className="w-full flex items-center px-4 py-2 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none"
            onClick={() => signIn("google", { callbackUrl: "/" })} // Redirect after successful login
          >
            <FaGoogle className="mr-2 text-red-500" size={20} />
            Log In with Google
          </button>

          {/* GitHub OAuth Signup */}
          <button
            className="w-full flex items-center px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none"
            onClick={() => signIn("github", { callbackUrl: "/" })}
          >
            <FaGithub className="mr-2" size={20} />
            Log In with GitHub
          </button>
        </div>

        <div className="flex flex-row items-center mt-5 justify-center">
          <p>Already registered?</p>
          <Link href="/signup" className="text-blue-400 ml-2 hover:underline">
            signup
          </Link>
        </div>
      </div>
    </div>
  );
}
