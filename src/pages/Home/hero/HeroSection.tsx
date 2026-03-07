import Container from "@/components/common/Container";
import HeroSearch from "./HeroSearch";
import JobzillaHeroIllustration from "./JobzillaHeroIllustration";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
      {/* Background Illustration */}
      <div className="absolute right-[-100px] top-0 h-full w-[60%] lg:w-[50%] z-0 opacity-80 md:opacity-100 transition-opacity">
        <JobzillaHeroIllustration />
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/90 to-transparent z-10"></div>

      <Container
        size="none"
        className="flex justify-between h-[80vh] min-h-[600px] gap-2.5 z-20 relative px-10"
      >
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-3/5 flex flex-col justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col gap-6 justify-center w-full max-w-2xl"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Get hired by <br />
              <motion.span
                className="inline-block text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                the monster teams.
              </motion.span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-xl leading-relaxed">
              Explore high-paying jobs, connect with top recruiters, and build
              the career you deserve.{" "}
              <span className="text-white font-bold">
                Simple, fast, and monsterly effective.
              </span>
            </p>
          </motion.div>

          <motion.div
            className="w-full max-w-2xl mt-4"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <HeroSearch />
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 text-lg font-black">
                10,000+
              </span>
              <span className="text-slate-500 text-sm font-bold">
                Jobs posted
              </span>
            </div>
            <div className="h-4 w-px bg-slate-800 hidden md:block"></div>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-emerald-500 text-lg font-black">
                5,000+
              </span>
              <span className="text-slate-500 text-sm font-bold">
                Verified recruiters
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
