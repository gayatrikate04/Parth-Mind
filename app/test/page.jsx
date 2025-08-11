import SignInWithCredentials from "../components/auth/SignInWithCredentials";
import SignUpWithCredentials from "../components/auth/SignUpWithCredentials";

export default function Page() {
  return (
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
        <h2 className="text-center text-2xl font-bold">
          Welcome to ParthMind ✨
        </h2>
        <SignInWithCredentials />
      </div>
    </div>
  );
}
