"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function PasswordInputField({ placeholder, name, ...props }) {
  const [isVisble, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className="relative">
      <input
        required
        {...props}
        type={isVisble ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        className="input-box w-full h-10 mt-3 pl-3 bg-black bg-opacity-50 rounded-md"
      ></input>
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-4 top-5"
      >
        {isVisble ? <EyeIcon></EyeIcon> : <EyeOffIcon></EyeOffIcon>}
      </button>
    </div>
  );
}
