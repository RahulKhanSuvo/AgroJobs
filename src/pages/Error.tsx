import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Error() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background/50 relative overflow-hidden px-4">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="text-center relative z-10 space-y-8 max-w-2xl mx-auto">
        {/* Floating 404 Text */}
        <div className="relative inline-block group">
          <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-linear-to-b from-primary to-primary/40 select-none animate-float tracking-tighter">
            404
          </h1>
          {/* Subtle reflection/shadow underneath */}
          <div className="h-4 w-full bg-black/5 rounded-[100%] blur-md scale-x-75 animate-shadow mt-2" />
        </div>

        <div className="space-y-4 pt-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Oops! Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto leading-relaxed">
            The link you followed might be broken, or the page may have been
            removed. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link to="/">
            <Button
              size="lg"
              className="px-8 min-w-[200px] hover:scale-105 transition-transform duration-300"
            >
              Back to Home
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="px-8 min-w-[200px] hover:bg-muted/50 transition-colors"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shadow {
          0%, 100% { transform: scaleX(0.75); opacity: 0.1; }
          50% { transform: scaleX(0.85); opacity: 0.2; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-shadow {
          animation: shadow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
