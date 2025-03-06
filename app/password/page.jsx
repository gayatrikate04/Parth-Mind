"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Page = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState(""); // Success message state

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage("Account created successfully! Redirecting...");
        
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
            router.push("/dashboard");
        }, 2000); // Giving it a little more time to show the success message
    };

    return (
        <>
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
                    <h2 className="text-center text-2xl font-bold">Enter a Password</h2>

                    <form onSubmit={handleSubmit} className="relative">
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input-box w-full h-10 mt-3 pl-3 pr-10 bg-black bg-opacity-50 rounded-md"
                                onChange={handleChange}
                                value={formData.password}
                                required
                            />
                            {/* Eye icon button for show/hide password */}
                            <button
                                type="button"
                                className="absolute right-3 top-6 text-gray-400 hover:text-white"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FaEyeSlash size={20} />
                                ) : (
                                    <FaEye size={20} />
                                )}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-blue-700 hover:opacity-80 text-white font-bold shadow-lg"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Success Message */}
                    {successMessage && (
                        <p className="text-center mt-4 text-green-400">{successMessage}</p>
                    )}

                    <div className="flex flex-row items-center mt-5 justify-center">
                        <p>Already registered?</p>
                        <Link href="/signin" className="text-blue-400 ml-2 hover:underline">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;