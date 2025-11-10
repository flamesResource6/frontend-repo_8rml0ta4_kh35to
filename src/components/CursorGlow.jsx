import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

// Soft cursor-follow glow that enhances the 3D feel without blocking interactions
const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const x = useSpring(0, { stiffness: 120, damping: 20, mass: 0.2 });
  const y = useSpring(0, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40"
      style={{ x: 0, y: 0 }}
    >
      <motion.div
        className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2"
        style={{ left: x, top: y }}
      >
        {/* Outer subtle glow */}
        <div className="h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(251,191,36,0.35), rgba(251,191,36,0.15), rgba(0,0,0,0))",
          }}
        />
        {/* Inner highlight */}
        <div className="h-24 w-24 -mt-40 -ml-10 rounded-full opacity-40 blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(253,230,138,0.4), rgba(253,230,138,0.05), rgba(0,0,0,0))",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CursorGlow;
