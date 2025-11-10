import { motion } from "framer-motion";

/**
 * HoverIcon
 * - Wraps a Lucide icon with subtle interactive hover: lift, scale, glow.
 * - Keeps pointer events on the parent so icons remain lightweight.
 */
const HoverIcon = ({ icon: Icon, size = 20, className = "", glow = "rgba(251,191,36,0.55)" }) => {
  return (
    <motion.span
      className={`relative inline-grid place-items-center ${className}`}
      whileHover={{ y: -2, scale: 1.08 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {/* Glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100"
        style={{ background: `radial-gradient(closest-side, ${glow}, rgba(0,0,0,0))` }}
      />
      <Icon style={{ width: size, height: size }} className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.35)]" />
    </motion.span>
  );
};

export default HoverIcon;
