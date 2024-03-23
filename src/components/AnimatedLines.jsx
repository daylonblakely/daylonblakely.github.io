import React from 'react';
import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const AnimatedLines = () => {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
      style={{ zIndex: -1 }}
    >
      {/* vertical */}
      <motion.line
        x1="15"
        y1="100"
        x2="15"
        y2="0"
        stroke="#0099ff"
        strokeWidth={10}
        variants={draw}
        custom={1}
      />
      {/* horizontal */}
      <motion.line
        x1="50"
        y1="60"
        x2="100"
        y2="60"
        stroke="#0099ff"
        strokeWidth={2}
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="50"
        y1="65"
        x2="92"
        y2="65"
        stroke="#0099ff"
        strokeWidth={2}
        variants={draw}
        custom={2}
      />
    </motion.svg>
  );
};

export default AnimatedLines;
