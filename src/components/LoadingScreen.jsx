import React, { useEffect, useState } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import "../styles/LoadingScreen.css";

export default function LoadingScreen({ onFinish }) {
  const [percent, setPercent] = useState(0);
  const [waveY, setWaveY] = useState(200);
  const x = useMotionValue(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: v => {
        setPercent(Math.floor(v));
        setWaveY(200 - v * 2);
      },
      onComplete: () => {
        setExit(true);
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 1200);
      }
    });

    const waveLoop = animate(0, 100, {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
      onUpdate: v => x.set(v)
    });

    return () => {
      controls.stop();
      waveLoop.stop();
    };
  }, [onFinish, x]);

  const wavePath = useTransform(x, v => {
  const amplitude = 20;
  const wavelength = 60;
  let d = `M 0 ${waveY}`;
  for (let i = 0; i <= 1000; i += wavelength) {
    const y = waveY + Math.sin((i + v * 5) * 0.02) * amplitude;
    d += ` L ${i} ${y}`;
  }
  d += ` L 1000 300 L 0 300 Z`;
  return d;
});


  return (
    <motion.div
      className="loading-root"
      initial={{ scale: 1, opacity: 1 }}
      animate={exit ? { scale: 1.4, opacity: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="liquid-center">
        <div className="liquid-text-container">
          <svg viewBox="0 0 1000 300" className="liquid-svg">
            <defs>
              <clipPath id="liquid-clip">
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="85"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                >
                  What's in your fridge?
                </text>
              </clipPath>
            </defs>
            <g clipPath="url(#liquid-clip)">
              <motion.path fill="#87CEEB" style={{ d: wavePath }} />
            </g>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="85"
              fontWeight="bold"
              fontFamily="Arial, sans-serif"
              fill="#ffffff"
              style={{ opacity: 0.15 }}
            >
              What's in your fridge?
            </text>
          </svg>
        </div>
        <motion.div
          className="loading-percent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3, type: "spring" }}
        >
          Loading {percent}%
        </motion.div>
      </div>
    </motion.div>
  );
}