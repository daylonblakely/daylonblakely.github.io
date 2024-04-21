import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import ColorModeContext from '../context/ColorModeContext';

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

const topLeftFillV = {
  visible: {
    opacity: 1,
    transition: {
      opacity: { delay: 2.1, duration: 1.5 },
    },
  },
  hidden: { opacity: 0 },
};

const AnimatedLines = () => {
  const theme = useTheme();
  const { mode } = useContext(ColorModeContext);

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1); // Increment the key to trigger rerender
  }, [mode]); // Dependency array includes mode, so this effect runs when mode changes

  return (
    <>
      {/* bg circle */}
      <motion.svg
        key={animationKey} // Key changed, component will rerender and animation will restart
        viewBox="0 0 100 100"
        style={{
          zIndex: -1,
        }}
      >
        <motion.rect
          x="0"
          y="0"
          width="100"
          height="99.8"
          rx="50"
          fill={theme.palette.primary.main}
          animate={{
            scale: [0.5, 1, 0.4, 0.5, 1],
            rotate: [180, 0, 0, 180, 0],
            rx: ['20', '10', '50', '30', '50'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        />
      </motion.svg>
      <motion.svg
        key={animationKey + 1}
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
        style={{ zIndex: -1 }}
      >
        {/* top left circle */}
        <motion.circle
          cx="30"
          cy="7"
          r="4"
          fill={theme.palette.background.default}
          variants={topLeftFillV}
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
      <motion.svg
        key={animationKey + 2}
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
      >
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
