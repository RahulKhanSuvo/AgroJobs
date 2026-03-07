import { motion } from "framer-motion";

export default function JobzillaHeroIllustration() {
  return (
    <motion.svg
      viewBox="0 0 800 600"
      className="w-full h-full object-contain"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Gradients */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#0f172a", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#1e293b", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="emeraldGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "#10b981", stopOpacity: 0.2 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#10b981", stopOpacity: 0 }}
          />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="800" height="600" fill="url(#skyGradient)" />

      {/* Distant Buildings (Silhouettes) */}
      <motion.g
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <path
          d="M50 600 L50 450 L100 450 L100 600 Z"
          fill="#334155"
          opacity="0.3"
        />
        <path
          d="M120 600 L120 400 L180 400 L180 600 Z"
          fill="#334155"
          opacity="0.3"
        />
        <path
          d="M200 600 L200 480 L250 480 L250 600 Z"
          fill="#334155"
          opacity="0.3"
        />
        <path
          d="M550 600 L550 420 L620 420 L620 600 Z"
          fill="#334155"
          opacity="0.3"
        />
        <path
          d="M650 600 L650 460 L720 460 L720 600 Z"
          fill="#334155"
          opacity="0.3"
        />
      </motion.g>

      {/* Mid Buildings with glowing windows */}
      <motion.g
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <path d="M0 600 L0 520 L80 520 L80 600 Z" fill="#1e293b" />
        <motion.rect
          x="20"
          y="540"
          width="10"
          height="10"
          fill="#fbbf24"
          animate={{ fillOpacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
        />
        <motion.rect
          x="50"
          y="540"
          width="10"
          height="10"
          fill="#fbbf24"
          animate={{ fillOpacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />

        <path d="M700 600 L700 500 L800 500 L800 600 Z" fill="#1e293b" />
        <motion.rect
          x="730"
          y="520"
          width="10"
          height="10"
          fill="#fbbf24"
          animate={{ fillOpacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
        />
        <motion.rect
          x="760"
          y="520"
          width="10"
          height="10"
          fill="#fbbf24"
          animate={{ fillOpacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2.1 }}
        />
      </motion.g>

      {/* Main Skyscraper Mascot is standing on */}
      <motion.g
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <path
          d="M300 600 L300 350 L500 350 L500 600 Z"
          fill="#0f172a"
          stroke="#1e293b"
          strokeWidth="2"
        />
        {[330, 360, 390, 420, 455].map((x, i) => (
          <motion.rect
            key={x}
            x={x}
            y={380}
            width={15}
            height={15}
            fill="#10b981"
            animate={{ fillOpacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </motion.g>

      {/* Mascot: The Jobzilla (Hero Pose) */}
      <motion.g
        transform="translate(340, 180) scale(1.5)"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.6 }}
      >
        {/* Shadow glow under mascot */}
        <motion.ellipse
          cx="50"
          cy="90"
          rx="40"
          ry="10"
          fill="url(#emeraldGlow)"
          animate={{
            rx: [40, 55, 40],
            ry: [10, 15, 10],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Mascot Body */}
        <path
          fill="#10b981"
          d="M75 35 C85 35 90 45 90 55 C90 75 70 85 50 85 C30 85 10 75 10 55 C10 40 25 30 40 30 C45 30 50 25 55 20 C60 15 70 15 75 20 L75 35 Z"
        />

        {/* Back Spikes */}
        <path fill="#10b981" d="M35 30 L25 15 L45 25 Z" />
        <path fill="#10b981" d="M50 22 L45 5 L60 18 Z" />
        <path fill="#10b981" d="M65 20 L65 2 L75 15 Z" />

        {/* Eye */}
        <circle cx="70" cy="45" r="4" fill="white" />
        <circle cx="71" cy="45" r="2" fill="black" />

        {/* Smile */}
        <path
          d="M65 65 Q75 65 85 55"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Briefcase */}
        <rect
          x="25"
          y="55"
          width="25"
          height="18"
          rx="2"
          fill="#059669"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M32 55 L32 51 Q32 47 37 47 L38 47 Q43 47 43 51 L43 55"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
      </motion.g>

      {/* Floating UI Elements (Abstract) */}
      <motion.circle
        cx="100"
        cy="100"
        r="5"
        fill="#10b981"
        animate={{ x: [0, 20, 0], y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="700"
        cy="150"
        r="8"
        fill="#10b981"
        animate={{ x: [0, -30, 0], y: [0, 30, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.rect
        x="600"
        y="80"
        width="40"
        height="2"
        fill="#10b981"
        rx="1"
        animate={{ x: [0, 40, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.rect
        x="150"
        y="200"
        width="30"
        height="2"
        fill="#10b981"
        rx="1"
        animate={{ x: [0, -50, 0], y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </motion.svg>
  );
}
