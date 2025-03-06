import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",  // Ensure a custom sign-in page if needed
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
