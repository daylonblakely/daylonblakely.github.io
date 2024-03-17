import React from 'react';
import { motion } from 'framer-motion';

const sectionVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, type: 'spring' },
  },
  hidden: { opacity: 0, scale: 0 },
};

const sectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  height: '100dvh',
  scrollSnapAlign: 'start',
  textAlign: 'center',
  position: 'relative',
  border: '3px',
  boxSizing: 'border-box',
};

const FullScreenSection = ({ id, children }) => {
  return (
    <motion.section
      className="section"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      style={sectionStyle}
      data-anchor={id}
    >
      {children}
    </motion.section>
  );
};

export default FullScreenSection;
