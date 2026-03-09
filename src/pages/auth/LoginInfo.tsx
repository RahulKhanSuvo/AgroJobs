import LoginIllustration from "./components/LoginIllustration";
import JobzillaLogo from "@/components/common/JobzillaLogo";

interface LoginInfoProps {
  heading?: string;
  subheading?: string;
}

export default function LoginInfo({
  heading = "Welcome back",
  subheading = "Sign in to continue your professional journey and discover new opportunities.",
}: LoginInfoProps) {
  return (
    <div className="relative h-full bg-slate-50 dark:bg-slate-950 grow overflow-hidden transition-colors duration-500 border-r border-slate-200 dark:border-slate-800">
      {/* Sleek hero-inspired background */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-100 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 transition-colors duration-500" />
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[30px_30px]" />

      {/* Content */}
      <div className="relative z-10 flex justify-between flex-col p-12 h-full">
        {/* Brand logo */}
        <div className="flex items-center gap-2">
          <JobzillaLogo className="text-slate-900 dark:text-white" />
        </div>

        <div className="flex flex-col items-center justify-center gap-8 text-center lg:text-left lg:items-start max-w-2xl mx-auto lg:mx-0 w-full">
          <LoginIllustration />

          <div className="text-slate-900 dark:text-white space-y-4 transition-colors w-full">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              {heading}
            </h3>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-lg transition-colors">
              {subheading}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-[0.2em] transition-colors">
          <span className="h-px w-12 bg-slate-300 dark:bg-slate-800 transition-colors" />
          Trusted by industry leaders
        </div>
      </div>
    </div>
  );
}
