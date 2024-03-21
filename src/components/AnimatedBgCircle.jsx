import React, { useEffect, useState, useRef } from 'react';
import { styled } from '@mui/system';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const AnimatedCircle = styled(motion.div)(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  backgroundColor: 'red',
  position: 'absolute',
  zIndex: -1,
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
  [theme.breakpoints.up('md')]: {
    marginTop: '15px',
  },
}));

const AnimatedBgCircle = () => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;

        // Calculate skew based on distance from center of the circle
        mouseX.set((deltaX * 5) / centerX);
        mouseY.set((deltaY * 5) / centerY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <AnimatedCircle
      ref={ref}
      style={{
        skewX: mouseX,
        skewY: mouseY,
      }}
    />
  );
};

export default AnimatedBgCircle;
