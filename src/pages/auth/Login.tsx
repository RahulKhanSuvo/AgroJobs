import { LoginForm } from "@/components/login-form";
import LoginInfo from "./LoginInfo";

export default function Login() {
  return (
    <div className="flex h-screen bg-white dark:bg-slate-950 overflow-hidden">
      {/* Left side: Mascot & Brand Info */}
      <div className="hidden lg:flex lg:w-1/2 min-w-[600px]">
        <LoginInfo />
      </div>

      {/* Right side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 overflow-y-auto">
        <LoginForm className="w-full max-w-[480px] shadow-none" />
      </div>
    </div>
  );
}
