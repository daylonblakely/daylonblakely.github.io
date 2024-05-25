import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const pages = [
  { id: 1, content: 'Page 1' },
  { id: 2, content: 'Page 2' },
  { id: 3, content: 'Page 3' },
];

const Page = ({ content }) => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <h1>{content}</h1>
  </div>
);

const useDebounce = (func, delay) => {
  const timeoutRef = React.useRef(null);

  const debouncedFunc = useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay]
  );

  return debouncedFunc;
};

const FullScreenScroll = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScroll = useDebounce((event) => {
    if (isAnimating) return;

    if (event.deltaY > 0 && pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
    } else if (event.deltaY < 0 && pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  }, 100);

  const handleKeyDown = useCallback(
    (event) => {
      if (isAnimating) return;

      if (
        (event.key === 'ArrowDown' || event.key === ' ') &&
        pageIndex < pages.length - 1
      ) {
        setPageIndex(pageIndex + 1);
      } else if (event.key === 'ArrowUp' && pageIndex > 0) {
        setPageIndex(pageIndex - 1);
      }
    },
    [pageIndex, isAnimating]
  );

  useEffect(() => {
    const handleWheel = (event) => handleScroll(event);
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pageIndex, isAnimating, handleScroll, handleKeyDown]);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    setIsAnimating(true);
  }, [pageIndex]);

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={handleAnimationComplete}
      key={pageIndex}
    >
      <Page content={pages[pageIndex].content} />
    </motion.div>
  );
};

export default FullScreenScroll;
