import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCircles = ({ numberOfCircles }) => {
  // Function to generate a random position within the screen bounds
  const getRandomPosition = () => ({
    x: Math.floor(Math.random() * window.innerWidth),
    y: Math.floor(Math.random() * window.innerHeight),
  });

  // Function to generate initial state for each circle
  const createCircle = () => ({
    position: getRandomPosition(),
    duration: Math.random() * 10 + 60, // Random duration between 10 and 15 seconds
  });

  // Initialize state with multiple circles
  const [circles, setCircles] = useState(
    Array.from({ length: numberOfCircles }, createCircle)
  );

  useEffect(() => {
    const timeouts = [];

    const moveCircle = (index) => {
      const newCircle = createCircle();
      setCircles((circles) => {
        const newCircles = [...circles];
        newCircles[index] = newCircle;
        return newCircles;
      });

      // Set timeout for the next animation for this circle
      const timeout = setTimeout(
        () => moveCircle(index),
        newCircle.duration * 1000
      );
      timeouts[index] = timeout;
    };

    // Start an individual timeout for each circle
    circles.forEach((_, index) => moveCircle(index));

    return () => timeouts.forEach(clearTimeout); // Cleanup timeouts on unmount
  }, []);

  return (
    <motion.svg
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        // background: 'green',
        zIndex: -1,
      }}
    >
      {circles.map((circle, index) => (
        <motion.circle
          key={index}
          cx={circle.position.x}
          cy={circle.position.y}
          r="2"
          fill="red"
          opacity="50%"
          animate={{ cx: circle.position.x, cy: circle.position.y }}
          transition={{
            duration: circle.duration,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.svg>
  );
};

export default AnimatedCircles;
