"use server";

import connectDB from "@/lib/config/db/connectDB";
import { User } from "@/lib/config/models/user";
import bcrypt from "bcryptjs";

export default async function registerAction({ email, password }) {
  try {
    await connectDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log(existingUser);
      return {
        error: true,
        message: "You already have an account with this email",
      };
    }
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    return {
      error: false,
      message: "Your SignUp is confirmed. You can go ahead and login",
    };
  } catch (error) {
    return {
      error: true,
      message: "Something went wrong.",
    };
  }
}
