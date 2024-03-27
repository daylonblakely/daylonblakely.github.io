import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const AnimatedCircleContainer = styled(motion.div)(({ theme, size }) => ({
  width: '95%',
  height: '95%',
  position: 'absolute',

  top: '50%' /* position the top  edge of the element at the middle of the parent */,
  left: '50%' /* position the left edge of the element at the middle of the parent */,

  transform: 'translate(-50%, -50%)',
  zIndex: -1,
  //   boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
  [theme.breakpoints.up('md')]: {
    // marginTop: '15px',
  },
}));

const AnimatedCircle = styled(motion.div)(({ theme, size }) => ({
  width: size || '100%',
  height: size || '100%',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  position: 'absolute',
}));

const AnimatedBgCircle = () => {
  const ref = useRef(null);
  const [circles, setCircles] = useState([
    {
      id: 0,
      size: '100%',
      magnitude: 2,
    },
    {
      id: 1,
      size: '100%',
      magnitude: 3,
    },
    {
      id: 2,
      size: '100%',
      magnitude: 4,
      rotate: '15deg',
    },
  ]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        setCircles(
          circles.map((circle, i) => {
            const deltaX = event.clientX - centerX;
            const deltaY = event.clientY - centerY;

            // Calculate distance from the center of the circle to the mouse
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
            const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);

            // Update scale based on the mouse proximity
            const scale = 1 + (1 - distance / maxDistance) * 0.01; // Increase 0.1 for more bulge

            const xSkew = (deltaX / centerX) * circle.magnitude;
            const ySkew = (deltaY / centerY) * circle.magnitude;

            return {
              ...circle,
              xSkew,
              ySkew,
              scale,
            };
          })
        );
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <AnimatedCircleContainer ref={ref}>
      {circles.map((circle) => (
        <AnimatedCircle
          key={circle.id}
          size={circle.size}
          style={{
            skewX: circle.xSkew || 0,
            skewY: circle.ySkew || 0,
            scale: circle.scale || 1,
            rotate: circle.rotate,
          }}
        />
      ))}
    </AnimatedCircleContainer>
  );
};

export default AnimatedBgCircle;
