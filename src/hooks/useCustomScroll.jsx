import { useEffect, useState } from 'react';
import { animate, useMotionValue } from 'framer-motion';

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

export const useCustomScroll = (sectionIds) => {
  const y = useMotionValue(0);
  const [currentSection, setCurrentSection] = useState(sectionIds[0]);

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const preventDefaultForScrollKeys = (e) => {
    if (KEY_CODES[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  };

  const wheelEvent =
    'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

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
    window.removeEventListener('resize', handleResize, options);
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
    window.addEventListener('resize', handleResize, options);
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

  const scrollToElement = (id) => {
    disableCustomScroll();
    const element = document.querySelector(`[data-anchor=${id}`);

    if (!element) {
      enableCustomScroll();
      return false;
    }

    const top = element.offsetTop;
    window.location.hash = `#${id}`; //scroll using the data-anchor so this line doesnt jump to element by id

    animate(y, -top, {
      type: 'spring',
      duration: SCROLL_DURATION,
      //   stiffness: 2000,
      onComplete: (v) => {
        setTimeout(() => {
          enableCustomScroll();
        }, 500); // helps prevent leftover scrolls from triggering handleScroll
      },
    });
  };

  const handleScroll = (e) => {
    disableCustomScroll();
    const scrollDirection = getScrollDirection(e);

    const scrollToSection =
      scrollDirection === TOP
        ? sectionIds[0]
        : scrollDirection === END
        ? sectionIds[sectionIds.length - 1]
        : scrollDirection === DOWN
        ? sectionIds[sectionIds.indexOf(currentSection) + 1]
        : scrollDirection === UP
        ? sectionIds[sectionIds.indexOf(currentSection) - 1]
        : null;

    if (scrollToSection) setCurrentSection(scrollToSection);
    else enableCustomScroll();
  };

  const handleResize = (e) => {
    const element = document.querySelector(`[data-anchor=${currentSection}`);
    const top = element.offsetTop;
    animate(y, -top);
  };
  // disable default scroll and enable custom
  // reverse on cleanup
  useEffect(() => {
    disableDefaultScroll();
    enableCustomScroll();

    return () => {
      disableCustomScroll();
      enableDefaultScroll();
    };
  }, []);

  scrollToElement(currentSection);

  return [y, currentSection];
};
