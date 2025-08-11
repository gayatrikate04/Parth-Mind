"use client";

import { useForm } from "react-hook-form";
import PasswordInputField from "./PasswordInputField";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "@/lib/config/schemas/loginSchema";

export default function SignInWithCredentials() {
  const {
    register,
    formState: { errors, isSubmitting },

    handleSubmit,
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (values) => {
    console.log(values);
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
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-green-600 to-blue-700 hover:opacity-80 text-white font-bold shadow-lg disabled:bg-gray-300"
        >
          {isSubmitting ? "Logging in..." : "Log In"}
        </button>

        {errors.root && (
          <p className="my-2 text-red-500">{errors.password.message}</p>
        )}
      </form>
    </div>
  );
}
