import React from 'react';
import { motion } from 'framer-motion';
import { useCustomScroll } from '../hooks/useCustomScroll';

const FullScreenScroller = ({ children }) => {
  const [y, currentSection] = useCustomScroll(
    children.map((child) => child.props.id)
  );
  console.log(currentSection);

  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        style={{
          position: 'relative',
          y,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FullScreenScroller;
