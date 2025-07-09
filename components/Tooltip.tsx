import { motion } from "framer-motion";
import { useState } from "react";

export default function Tooltip({ text, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="absolute bottom-full z-40 flex w-fit mb-2 px-2 py-1 text-xs text-white whitespace-nowrap bg-gray-800 rounded"
        >
          {text}
        </motion.div>
      )}
    </div>
  );
}