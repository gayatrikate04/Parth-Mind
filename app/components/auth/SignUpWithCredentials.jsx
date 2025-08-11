"use client";

import { useForm } from "react-hook-form";
import PasswordInputField from "./PasswordInputField";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema from "@/lib/config/schemas/registerSchema";
import registerAction from "@/actions/registerAction";
import { useState } from "react";

export default function SignUpWithCredentials() {
  const [message, setMessage] = useState("");
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    reset,
    setError,
    handleSubmit,
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = async ({ email, password }) => {
    setMessage("");
    const { error, message } = await registerAction({ email, password });
    if (error) {
      setError("root", { message: message });
    } else {
      reset();
      setMessage(message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          required
          {...register("email")}
          type="email"
          name="email"
          placeholder="Email"
          className="input-box w-full h-10 mt-3 pl-3 bg-black bg-opacity-50 rounded-md"
        ></input>
        {errors.email && (
          <p className="my-2 text-red-500">{errors.email.message}</p>
        )}
        <PasswordInputField
          name="password"
          placeholder={"Password"}
          {...register("password")}
        ></PasswordInputField>
        {errors.password && (
          <p className="my-2 text-red-500">{errors.password.message}</p>
        )}
        <PasswordInputField
          name="confirmPassword"
          placeholder={"Confirm Password"}
          {...register("confirmPassword")}
        ></PasswordInputField>
        {errors.confirmPassword && (
          <p className="my-2 text-red-500">{errors.confirmPassword.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-blue-700 hover:opacity-80 text-white font-bold shadow-lg disabled:bg-gray-300"
        >
          {isSubmitting ? "Signing up..." : "Sign Up"}
        </button>

        {errors.root && (
          <p className="my-2 text-red-500">{errors.root.message}</p>
        )}
        {message && <p className="my-2 text-green-500">{message}</p>}
      </form>
    </div>
  );
}
