"use server";
import prisma from "@/lib/config/db/prisma";
import bcrypt from "bcryptjs";

export default async function registerAction({ email, password }) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return {
        error: true,
        message: "You already have an account with this email",
      };
    }
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
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
