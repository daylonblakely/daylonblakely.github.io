import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const getRandomPosition = (min, max) => {
  return Math.random() * (max - min) + min;
};

const Bubble = ({ parentRef }) => {
  const controls = useAnimation();

  useEffect(() => {
    const bounceAnimation = async () => {
      if (!parentRef.current) return;

      const parentWidth = parentRef.current.clientWidth;
      const parentHeight = parentRef.current.clientHeight;
      const bubbleSize = 50; // Size of the bubble

      while (true) {
        const newX = getRandomPosition(0, parentWidth - bubbleSize);
        const newY = getRandomPosition(0, parentHeight - bubbleSize);

        await controls.start({
          x: newX,
          y: newY,
          transition: { duration: 5, ease: 'easeInOut' },
        });
      }
    };

    bounceAnimation();

    return () => controls.stop(); // Stop animation when component unmounts
  }, [controls, parentRef]);

  return (
    <motion.div
      animate={controls}
      initial={false}
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'blue',
        position: 'absolute',
      }}
    />
  );
};

export default Bubble;
