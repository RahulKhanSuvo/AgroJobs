import { LoginForm } from "@/components/login-form";
import LoginInfo from "./LoginInfo";

export default function Login() {
  return (
    <div className="flex border h-screen justify-between ">
      <LoginInfo />
      <LoginForm className="w-fit border flex justify-center items-center" />
    </div>
  );
}
