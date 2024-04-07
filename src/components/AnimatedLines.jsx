import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();

  return (
    <>
      <motion.svg
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
        style={{ zIndex: -1 }}
      >
        {/* bg circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="49.9"
          // stroke={theme.palette.secondary.main}
          // variants={draw}
          fill={theme.palette.primary.main}
          // custom={3}
        />
        {/* top left circle */}
        <motion.circle
          cx="30"
          cy="7"
          r="4"
          fill={theme.palette.background.default}
        />
        <motion.circle
          cx="30"
          cy="7"
          r="4"
          stroke={theme.palette.secondary.main}
          variants={draw}
          fill="none"
          custom={2}
        />
        {/* top right circle */}
        <motion.circle
          cx="85"
          cy="15"
          r="13"
          stroke={theme.palette.secondary.main}
          variants={draw}
          fill="none"
          custom={3}
        />
        {/* horizontal lines */}
        <motion.line
          x1="50"
          y1="60"
          x2="100"
          y2="60"
          stroke={theme.palette.tertiary.main}
          strokeWidth={2}
          variants={draw}
          custom={1}
        />
        <motion.line
          x1="50"
          y1="65"
          x2="92"
          y2="65"
          stroke={theme.palette.tertiary.main}
          strokeWidth={2}
          variants={draw}
          custom={2}
        />
      </motion.svg>
      <motion.svg viewBox="0 0 100 100" initial="hidden" animate="visible">
        {/* vertical line */}
        <motion.line
          x1="15"
          y1="100"
          x2="15"
          y2="0"
          stroke={theme.palette.tertiary.main}
          strokeWidth={10}
          variants={draw}
          custom={1}
        />
      </motion.svg>
    </>
  );
};

export default AnimatedLines;
