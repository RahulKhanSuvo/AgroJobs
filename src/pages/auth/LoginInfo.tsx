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
    <div className="relative h-full bg-sky-200 dark:bg-slate-950 grow overflow-hidden transition-colors duration-500">
      {/* Sunny sky in light mode, deeper space in dark mode */}
      <div className="absolute inset-0 bg-linear-to-b from-sky-400 via-sky-200 to-sky-100 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-950 transition-colors duration-500" />
      <div className="absolute inset-0 opacity-30 dark:opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[30px_30px]" />

      {/* Content */}
      <div className="relative z-10 flex justify-between flex-col p-12 h-full">
        {/* Brand logo */}
        <div className="flex items-center gap-2">
          <JobzillaLogo className="text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-none" />
        </div>

        <div className="flex flex-col items-center justify-center gap-12 text-center lg:text-left lg:items-start max-w-2xl mx-auto lg:mx-0">
          <LoginIllustration />

          <div className="text-slate-900 dark:text-white space-y-4 transition-colors">
            <h3 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter drop-shadow-sm dark:drop-shadow-none">
              {heading}
            </h3>
            <p className="text-lg md:text-xl text-slate-800 dark:text-emerald-50 font-medium max-w-lg opacity-90 transition-colors">
              {subheading}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-slate-600 dark:text-white/60 text-xs font-bold uppercase tracking-[0.2em] transition-colors">
          <span className="h-px w-12 bg-slate-400 dark:bg-white/20 transition-colors" />
          Trusted by industry leaders
        </div>
      </div>
    </div>
  );
}
