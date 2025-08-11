import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/config/db/prisma";
import bcrypt from "bcryptjs";
export default NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user) {
            console.log("User not found");
            return null;
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isValid) {
            console.log("Invalid password");
            return null;
          }

          return { email: user.email };
        } catch (err) {
          console.error("Authorize error:", err);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin", // Ensure a custom sign-in page if needed
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback:", url, baseUrl);

      if (url.startsWith("/")) {
        return `${baseUrl}/dashboard`;
      } else if (url.startsWith(baseUrl)) {
        return `${baseUrl}/dashboard`;
      } else {
        return baseUrl;
      }
    },
  },
});
