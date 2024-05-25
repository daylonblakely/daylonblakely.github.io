import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';

const PageContainer = styled('div')({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const PageIndicatorContainer = styled('div')({
  position: 'fixed',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const IndicatorDot = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ theme, isActive }) => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  margin: '5px 0',
  backgroundColor: isActive ? theme.palette.primary.main : 'gray',
}));

const Page = ({ content }) => (
  <PageContainer>
    <h1>{content}</h1>
  </PageContainer>
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

const PageIndicator = ({ pages, currentPageIndex }) => (
  <PageIndicatorContainer>
    {pages.map((_, index) => (
      <IndicatorDot key={index} isActive={currentPageIndex === index} />
    ))}
  </PageIndicatorContainer>
);

const FullScreenScroll = ({ pages }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const page = pages.findIndex((p) => p.path === path);
    if (page !== -1) {
      setPageIndex(page);
    }
  }, [location.pathname, pages]);

  const handleScroll = useDebounce((event) => {
    if (isAnimating) return;

    if (event.deltaY > 0 && pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
      navigate(pages[pageIndex + 1].path);
    } else if (event.deltaY < 0 && pageIndex > 0) {
      setPageIndex(pageIndex - 1);
      navigate(pages[pageIndex - 1].path);
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
        navigate(pages[pageIndex + 1].path);
      } else if (event.key === 'ArrowUp' && pageIndex > 0) {
        setPageIndex(pageIndex - 1);
        navigate(pages[pageIndex - 1].path);
      }
    },
    [pageIndex, isAnimating, navigate, pages]
  );

  const handleTouchStart = useCallback((event) => {
    const touch = event.touches[0];
    window.startY = touch.clientY;
  }, []);

  const handleTouchMove = useCallback(
    (event) => {
      if (isAnimating || !window.startY) return;

      const touch = event.touches[0];
      window.diffY = touch.clientY - window.startY;
    },
    [isAnimating]
  );

  const handleTouchEnd = useCallback(() => {
    if (isAnimating || !window.diffY) return;

    if (window.diffY > 50 && pageIndex > 0) {
      setPageIndex(pageIndex - 1);
      navigate(pages[pageIndex - 1].path);
    } else if (window.diffY < -50 && pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
      navigate(pages[pageIndex + 1].path);
    }

    window.startY = null;
    window.diffY = null;
  }, [pageIndex, isAnimating, navigate, pages]);

  useEffect(() => {
    const handleWheel = (event) => handleScroll(event);
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [
    pageIndex,
    isAnimating,
    handleScroll,
    handleKeyDown,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  ]);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    setIsAnimating(true);
  }, [pageIndex]);

  return (
    <div>
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
      <PageIndicator pages={pages} currentPageIndex={pageIndex} />
    </div>
  );
};

export default FullScreenScroll;
