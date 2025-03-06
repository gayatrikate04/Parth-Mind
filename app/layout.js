import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AuthProvider from "./components/AuthProvider"; // Create this in step 2

export const metadata = {
  title: "ParthMind",
  description: "App to help with overthinking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider> 
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
