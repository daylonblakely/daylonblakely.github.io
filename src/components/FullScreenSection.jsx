import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sectionVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    backgroundColor: '#03d3fc',
    transition: { duration: 0.75 },
  },
  hidden: { opacity: 0, scale: 0 },
};

const sectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid white',
  padding: '1rem',
  height: '100vh',
  scrollSnapAlign: 'start',
  textAlign: 'center',
  position: 'relative',
  // backgroundColor: 'gray',
};

const FullScreenSection = ({ id, children }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.section
      className="section"
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={control}
      style={sectionStyle}
      // id={id}
      data-anchor={id}
    >
      {children}
    </motion.section>
  );
};

export default FullScreenSection;
