import React from 'react';
import { motion } from 'framer-motion';
import { useCustomScroll } from '../hooks/useCustomScroll';

const FullScreenScroller = ({ children }) => {
  // TODO find a way to pass in section ids w/o querying dom
  const [y, currentSection] = useCustomScroll(
    children.map((child) => child.props.id)
  );
  console.log(currentSection);

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

export default FullScreenScroller;
