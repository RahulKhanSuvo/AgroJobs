import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { useMemo } from "react";

export default function LoginIllustration() {
  const { theme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Memoize star data
  const starsData = useMemo(
    () => [
      { x: 50, y: 100, d: 2, s: 1.2, rd: 8.5 },
      { x: 300, y: 50, d: 5, s: 0.8, rd: 12.2 },
      { x: 150, y: 80, d: 8, s: 1.5, rd: 6.7 },
    ],
    [],
  );

  // ---- Theme colour tokens (from Hero Illustration) ----
  const farBldg = isDark ? "#334155" : "#64748b";
  const midBldg = isDark ? "#1e293b" : "#94a3b8";
  const mainBldg = isDark ? "#0f172a" : "#e2e8f0";
  const mainStroke = isDark ? "#1e293b" : "#cbd5e1";
  const winColor = isDark ? "#fbbf24" : "#bae6fd";
  const mainWin = isDark ? "#10b981" : "#7dd3fc";
  const glowFill = isDark ? "#10b981" : "#38bdf8";

  return (
    <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center -mt-8">
      <motion.svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-2xl z-10 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="loginGlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={glowFill} stopOpacity="0.4" />
            <stop offset="100%" stopColor={glowFill} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ── SHOOTING STARS (dark mode) ── */}
        {isDark && (
          <motion.g>
            {starsData.map((star, i) => (
              <motion.g
                key={i}
                initial={{ x: star.x, y: star.y, opacity: 0, scale: 0 }}
                animate={{
                  x: [star.x, star.x + 200],
                  y: [star.y, star.y + 100],
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1, 1, 0],
                }}
                transition={{
                  duration: star.s * 1.5,
                  repeat: Infinity,
                  repeatDelay: star.rd,
                  delay: star.d,
                  ease: "easeIn",
                }}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="-30"
                  y2="-15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <circle cx="0" cy="0" r="1.5" fill="white" />
              </motion.g>
            ))}
          </motion.g>
        )}

        {/* ── CLOUDS (simplified for scale) ── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.path
            d="M50 150 Q80 130 110 140 T160 150 T200 140 T240 160 T180 180 T110 170 T50 150 Z"
            fill="white"
            animate={{
              x: [-10, 10, -10],
              opacity: [
                isDark ? 0.05 : 0.6,
                isDark ? 0.1 : 0.8,
                isDark ? 0.05 : 0.6,
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M300 120 Q330 100 360 110 T410 130 T450 120 T360 140 Z"
            fill="white"
            animate={{
              x: [10, -10, 10],
              opacity: [
                isDark ? 0.04 : 0.5,
                isDark ? 0.08 : 0.7,
                isDark ? 0.04 : 0.5,
              ],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </motion.g>

        {/* ── DISTANT BUILDINGS ── */}
        <motion.g
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {[
            "M20 500 L20 380 L70 380 L70 500 Z",
            "M50 500 L50 350 L100 350 L100 500 Z",
            "M80 500 L80 270 L130 270 L130 500 Z",
            "M120 500 L120 300 L180 300 L180 500 Z",
            "M155 500 L155 360 L185 360 L185 500 Z",
            "M320 500 L320 340 L370 340 L370 500 Z",
            "M350 500 L350 320 L420 320 L420 500 Z",
            "M425 500 L425 280 L460 280 L460 500 Z",
            "M450 500 L450 360 L500 360 L500 500 Z",
          ].map((d, i) => (
            <path
              key={i}
              d={d}
              fill={farBldg}
              opacity={i % 2 === 0 ? 0.2 : 0.35}
            />
          ))}
        </motion.g>

        {/* ── MID BUILDINGS with windows ── */}
        <motion.g
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <path d="M0 500 L0 420 L80 420 L80 500 Z" fill={midBldg} />
          {[
            { x: 20, y: 440, d: 0.2 },
            { x: 50, y: 440, d: 1.5 },
          ].map(({ x, y, d }, i) => (
            <motion.rect
              key={i}
              x={x}
              y={y}
              width="10"
              height="10"
              fill={winColor}
              animate={{ fillOpacity: [0.35, 0.85, 0.35] }}
              transition={{ duration: 3, repeat: Infinity, delay: d }}
            />
          ))}

          <path d="M100 500 L100 440 L160 440 L160 500 Z" fill={midBldg} />
          <motion.rect
            x="120"
            y="460"
            width="8"
            height="8"
            fill={winColor}
            animate={{ fillOpacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          />

          <path d="M380 500 L380 430 L450 430 L450 500 Z" fill={midBldg} />
          <motion.rect
            x="400"
            y="450"
            width="12"
            height="12"
            fill={winColor}
            animate={{ fillOpacity: [0.3, 0.75, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1.2 }}
          />
        </motion.g>

        {/* ── MAIN SKYSCRAPER ── */}
        <motion.g
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <path
            d="M180 500 L180 250 L360 250 L360 500 Z"
            fill={mainBldg}
            stroke={mainStroke}
            strokeWidth="2"
          />
          {[200, 230, 260, 290, 320].map((x, i) => (
            <motion.rect
              key={x}
              x={x}
              y={280}
              width={15}
              height={15}
              fill={mainWin}
              animate={{ fillOpacity: [0.15, 0.5, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
        </motion.g>

        {/* ── JOBZILLA MASCOT ── */}
        <motion.g
          transform="translate(200, 160) scale(1.4)"
          animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Ground Glow */}
          <motion.ellipse
            cx="50"
            cy="95"
            rx="45"
            ry="12"
            fill="url(#loginGlowGrad)"
            animate={{
              rx: [40, 50, 40],
              ry: [10, 15, 10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Body */}
          <path
            fill="#10b981"
            d="M75 35 C85 35 90 45 90 55 C90 75 70 85 50 85 C30 85 10 75 10 55 C10 40 25 30 40 30 C45 30 50 25 55 20 C60 15 70 15 75 20 L75 35 Z"
          />

          {/* Back Spikes */}
          <path fill="#059669" d="M35 30 L25 15 L45 25 Z" />
          <path fill="#059669" d="M50 22 L45 5 L60 18 Z" />
          <path fill="#059669" d="M65 20 L65 2 L75 15 Z" />

          {/* Eye */}
          <circle cx="70" cy="45" r="4" fill="white" />
          <motion.circle
            cx="71"
            cy="45"
            r="2"
            fill="black"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          />

          {/* Mouth */}
          <path
            d="M65 65 Q75 65 85 55"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Briefcase */}
          <motion.g
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect
              x="25"
              y="55"
              width="30"
              height="20"
              rx="2"
              fill="#059669"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M35 55 L35 50 Q35 45 40 45 T45 50 L45 55"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </motion.g>
        </motion.g>
      </motion.svg>
    </div>
  );
}
