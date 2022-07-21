import React, { useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
import { useCustomScroll } from '../hooks/useCustomScroll';

const FullScreenScrollerParalax = ({ children }) => {
  const [y] = useCustomScroll(['section1', 'section2', 'section3']);
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({ target: ref });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log('Page scroll: ', latest);
      console.log('Page scroll progress: ', scrollYProgress);
    });
  }, []);

  return (
    <motion.div
      style={{
        y,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FullScreenScrollerParalax;
