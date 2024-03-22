import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/system';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCircle = styled(motion.div)(({ theme, size }) => ({
  width: size || '100%',
  height: size || '100%',
  borderRadius: '50%',
  backgroundColor: 'red',
  position: 'absolute',
  zIndex: -1,
  //   boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
  [theme.breakpoints.up('md')]: {
    // marginTop: '15px',
  },
}));

const AnimatedBgCircle = () => {
  const ref = useRef(null);
  const [circles, setCircles] = useState([
    {
      id: 1,
      size: '100%',
      //   offsetX: 100,
      //   offsetY: 10,
      magnitude: 10,
    },
    {
      id: 2,
      size: null,
      //   offsetX: -,
      //   offsetY: 0,
      magnitude: 5,
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
            const scale = 1 + (1 - distance / maxDistance) * 0.1 * i; // Increase 0.1 for more bulge

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
    <div
      ref={ref}
      //   style={{ width: '100%', height: '100%', position: 'absolute' }}
    >
      {circles.map((circle) => (
        <AnimatedCircle
          key={circle.id}
          size={circle.size}
          style={{
            skewX: circle.xSkew || 0,
            skewY: circle.ySkew || 0,
            scale: circle.scale || 1,
            // left: circle.offsetX + 'px',
            // top: circle.offsetY + 'px',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBgCircle;
