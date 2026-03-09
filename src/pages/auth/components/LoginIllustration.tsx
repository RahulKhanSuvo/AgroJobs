import { motion } from "framer-motion";

export default function LoginIllustration() {
  return (
    <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
      {/* Sunny Sky / Starry Night Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Sun in light mode, hidden in dark mode */}
        <motion.div
          // Sun
          className="absolute right-10 top-10 w-24 h-24 rounded-full bg-yellow-300 dark:bg-slate-200 blur-xl dark:blur-md scale-100 dark:scale-0 transition-transform duration-500"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute right-14 top-14 w-16 h-16 rounded-full bg-yellow-400 dark:hidden transition-colors duration-500" />

        {/* Moon in dark mode, hidden in light mode */}
        <div className="absolute right-14 top-14 w-16 h-16 rounded-full bg-slate-200 hidden dark:block shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-colors duration-500">
          {/* Moon craters */}
          <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-slate-300/50" />
          <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-slate-300/50" />
          <div className="absolute top-8 left-8 w-5 h-5 rounded-full bg-slate-300/50" />
        </div>

        {/* Clouds */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-10 bg-white/70 dark:bg-white/10 rounded-full blur-sm"
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-40 h-12 bg-white/70 dark:bg-white/10 rounded-full blur-sm"
          animate={{ x: [20, -20, 20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main UFO Illustration */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-xl dark:drop-shadow-[0_0_30px_rgba(16,185,129,0.2)] z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tractor Beam */}
        <motion.path
          d="M100 70 L50 180 L150 180 Z"
          className="fill-emerald-400/30 dark:fill-emerald-500/20"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Beam Lines */}
        <motion.line
          x1="80"
          y1="70"
          x2="60"
          y2="180"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.5"
          strokeDasharray="5,5"
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.line
          x1="120"
          y1="70"
          x2="140"
          y2="180"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.5"
          strokeDasharray="5,5"
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />

        {/* UFO */}
        <motion.g
          animate={{ y: [0, -5, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Glass Dome */}
          <path
            d="M70 60 C70 30 130 30 130 60 Z"
            fill="#94a3b8"
            fillOpacity="0.5"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          {/* Tiny Alien inside dome */}
          <circle cx="100" cy="50" r="8" fill="#10b981" />
          <circle cx="97" cy="48" r="2" fill="white" />
          <circle cx="103" cy="48" r="2" fill="white" />

          {/* UFO Body */}
          <path
            d="M40 60 Q100 40 160 60 Q180 70 160 80 Q100 100 40 80 Q20 70 40 60 Z"
            className="fill-slate-800 dark:fill-slate-900"
            stroke="#475569"
            strokeWidth="3"
          />

          {/* UFO Lights */}
          {[50, 75, 100, 125, 150].map((cx, i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={70 + (cx === 100 ? 5 : cx === 75 || cx === 125 ? 2 : -2)}
              r="4"
              className="fill-emerald-400"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </motion.g>

        {/* Mascot being beamed up/down */}
        <motion.g
          animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          transform="translate(45, 75) scale(0.55)"
        >
          {/* Very round, chubby monster body */}
          <path
            d="M150 70 C180 70 190 110 180 140 C170 180 130 180 100 180 C70 180 30 180 20 140 C10 110 20 70 50 70 C60 70 90 40 120 40 C140 40 140 70 150 70 Z"
            className="fill-emerald-500"
          />

          {/* Cute rounded spikes */}
          <path d="M70 60 Q60 30 90 55 Z" className="fill-emerald-600" />
          <path d="M100 45 Q105 15 120 40 Z" className="fill-emerald-600" />

          {/* Huge cute eye */}
          <circle cx="130" cy="95" r="16" fill="white" />
          <motion.circle
            cx="134"
            cy="95"
            r="8"
            fill="#1e293b"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 0.25, repeat: Infinity, repeatDelay: 4 }}
          />
          {/* Eye catchlight (sparkle in eye) */}
          <circle cx="137" cy="92" r="3" fill="white" />

          {/* Cute blush */}
          <circle cx="155" cy="110" r="8" className="fill-rose-400/60" />

          {/* Little confident smile */}
          <path
            d="M125 130 Q135 135 145 125"
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Tiny cute arms holding a mini briefcase */}
          <path
            d="M90 125 Q80 140 70 135"
            fill="none"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M110 130 Q105 145 95 140"
            fill="none"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <motion.g
            animate={{ rotate: [-3, 3, -3], y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Tiny Briefcase */}
            <rect
              x="55"
              y="130"
              rx="4"
              width="40"
              height="25"
              className="fill-slate-800"
              stroke="white"
              strokeWidth="3"
            />
            <path
              d="M65 130 V125 Q65 120 75 120 T85 125 V130"
              fill="none"
              stroke="white"
              strokeWidth="3"
            />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
