"use client"; // ✅ Required for client components in App Router

import React from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router
import { signOut } from "next-auth/react";

const Navbar = () => {
  const router = useRouter(); // ✅ Initialize Next.js router correctly

  return (
    <nav className="bg-black shadow-xl border-none shadow-white  flex justify-between items-center px-4 md:h-16 rounded">
      <div className="flex items-center gap-2">
        <img className="rounded-full" src="logo.png" alt="Logo" width={50} height={50} />
        <h1 className="text-2xl text-green-500 font-bold">ParthMind</h1>
      </div>

      <div className="flex flex-col text-white md:flex-row items-center md:justify-end md:space-x-4">
        {/* ✅ Use router.push for navigation */}
        <button onClick={() => router.push('/signin')} className="text-sm md:text-base hover:underline">
          LogIn
        </button>

        <button 
            onClick={() => router.push('/signup')} 
            className="bg-white text-black rounded-full text-sm md:text-base hover:backdrop: px-4 py-2 transform transition-transform duration-300 hover:scale-90 hover:shadow-2xl"
                        >
                            
            Sign Up
        </button>

        
      </div>
    </nav>
  );
};

export default Navbar;

