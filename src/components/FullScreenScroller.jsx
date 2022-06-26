import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, animate, useMotionValue } from 'framer-motion';

const UP = 'up';
const DOWN = 'down';
const LEFT = 'left';
const RIGHT = 'right';
const END = 'end';
const TOP = 'top';
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const KEY_CODES = {
  32: DOWN,
  33: UP,
  34: DOWN,
  35: END,
  36: TOP,
  37: LEFT,
  38: UP,
  39: RIGHT,
  40: DOWN,
};

const SCROLL_DURATION = 2; //seconds

export default function FullScreenScroller({ children }) {
  const control = useAnimation();
  const y = useMotionValue(0);
  const section = useRef(1);

  const wheelEvent =
    'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const preventDefaultForScrollKeys = (e) => {
    const keys = { 32: 1, 37: 1, 38: 1, 39: 1, 40: 1 };
    if (KEY_CODES[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  };

  const disableDefaultScroll = () => {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, {
      passive: false,
    }); // modern desktop
    window.addEventListener('touchmove', preventDefault, {
      passive: false,
    }); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  };

  const enableDefaultScroll = () => {
    window.removeEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.removeEventListener(wheelEvent, preventDefault, {
      passive: false,
    }); // modern desktop
    window.removeEventListener('touchmove', preventDefault, {
      passive: false,
    }); // mobile
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  };

  const disableCustomScroll = () => {
    const options = {
      passive: false,
      once: true,
    };
    window.removeEventListener('DOMMouseScroll', handleScroll, options); // older FF
    window.removeEventListener(wheelEvent, handleScroll, options); // modern desktop
    window.removeEventListener('touchmove', handleScroll, options); // mobile
    window.removeEventListener('keydown', handleScroll, options);
  };

  const enableCustomScroll = () => {
    const options = {
      passive: false,
      once: true, // listener gets removed after first call, prevents events from being fired during scroll
    };
    window.addEventListener('DOMMouseScroll', handleScroll, options); // older FF
    window.addEventListener(wheelEvent, handleScroll, options); // modern desktop
    window.addEventListener('touchmove', handleScroll, options); // mobile
    window.addEventListener('keydown', handleScroll, options);
  };

  const getScrollDirection = (e) => {
    if (e.deltaY > 0) {
      return DOWN;
    }

    if (e.deltaY < 0) {
      return UP;
    }

    return KEY_CODES[e.keyCode];
  };

  const handleScroll = (e) => {
    disableCustomScroll();
    const scrollDirection = getScrollDirection(e);

    const scrollToSection =
      scrollDirection === TOP
        ? 1
        : scrollDirection === END
        ? 2 //TODO go to bottom on end
        : scrollDirection === DOWN
        ? section.current + 1
        : section.current - 1;

    try {
      const top = document.getElementById(
        `section${scrollToSection}`
      ).offsetTop;
      animate(y, -top, {
        type: 'spring',
        duration: SCROLL_DURATION,
        //   stiffness: 2000,
        onComplete: (v) => {
          section.current = scrollToSection;
          window.location.hash = `#section${section.current}`;
          enableCustomScroll();
        },
      });
    } catch (error) {
      enableCustomScroll();
    }
  };

  useEffect(
    () => {
      window.location.hash = `#section${section.current}`;
      disableDefaultScroll();
      enableCustomScroll();
      return () => {
        disableCustomScroll();
        enableDefaultScroll();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <motion.div
      id="test"
      style={{
        // scrollSnapType: 'y mandatory',
        // maxHeight: '100vh',
        overflowY: 'auto',
        // overflowY: 'hidden',
        scrollBehavior: 'smooth',
        y,
      }}
      animate={control}
    >
      {children}
    </motion.div>
  );
}
