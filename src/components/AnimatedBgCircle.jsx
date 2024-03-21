import React, { useEffect } from 'react';
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
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);

  // Use the mouse position to scale the blob
  const scale = useTransform(mouseX, [0, window.innerWidth], [1, 1.5]);
  const skewX = useTransform(mouseY, [0, window.innerHeight], [0, 30]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <AnimatedCircle
      style={{
        scaleX: scale,
        skewX: skewX,
      }}
    />
  );
};

export default AnimatedBgCircle;
