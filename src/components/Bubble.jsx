import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const getRandomPosition = (min, max) => {
  return Math.random() * (max - min) + min;
};

const Bubble = () => {
  const controls = useAnimation();

  useEffect(() => {
    const bounceAnimation = async () => {
      // const parentWidth = parentRef.current.clientWidth;
      // const parentHeight = parentRef.current.clientHeight;
      const parentWidth = 100;
      const parentHeight = 100;
      const bubbleSize = 10; // Size of the bubble

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

    // bounceAnimation();

    return () => controls.stop(); // Stop animation when component unmounts
  }, [controls]);

  return (
    <motion.svg
      viewBox="0 0 100 100"
      style={{
        zIndex: -1,
        position: 'absolute',
        height: '100%',
        width: '100%',
      }}
    >
      <motion.rect
        x="0"
        y="0"
        width="10"
        height="10"
        rx="50"
        fill={'red'}
        controls={controls}
        // animate={{
        //   x: 50,
        // }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      />
    </motion.svg>
  );
};

export default Bubble;
