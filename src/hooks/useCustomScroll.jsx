import { useEffect, useState, useRef } from 'react';
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

  // use state and ref to get current section in event handlers
  // https://medium.com/geographit/accessing-react-state-in-event-listeners-with-usestate-and-useref-hooks-8cceee73c559
  const [currentSection, _setCurrentSection] = useState(sectionIds[0]);
  const currentSectionRef = useRef(currentSection);
  const setCurrentSection = (section) => {
    currentSectionRef.current = section;
    _setCurrentSection(section);
  };

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
    window.removeEventListener('resize', handleResize);
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
    window.addEventListener('resize', handleResize);
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
        ? sectionIds[sectionIds.indexOf(currentSectionRef.current) + 1]
        : scrollDirection === UP
        ? sectionIds[sectionIds.indexOf(currentSectionRef.current) - 1]
        : null;

    // update state and ref to current section
    if (scrollToSection) setCurrentSection(scrollToSection);
    else enableCustomScroll();
  };

  const handleResize = () => {
    const element = document.querySelector(
      `[data-anchor=${currentSectionRef.current}`
    );
    const top = element.offsetTop;
    animate(y, -top);
  };

  // a url hash change is what triggers the scroll animation
  const handleHashChange = (e) => {
    e.preventDefault();

    const id = window.location.hash.replace('#', '');

    // return if hash is invalid
    if (!sectionIds.includes(id)) return;

    scrollToElement(id);

    // update the state if the hash changes from something other than a scroll (link clicked)
    if (id !== currentSectionRef.current) {
      setCurrentSection(id);
    }
  };

  // disable default scroll and enable custom
  // reverse on cleanup
  useEffect(() => {
    disableDefaultScroll();
    enableCustomScroll();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      disableCustomScroll();
      enableDefaultScroll();
      window.removeEventListener('hashchange', handleHashChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // update the url hash on render
  // this triggers the scroll
  window.location.hash = `#${currentSectionRef.current}`; //scroll using the data-anchor so this line doesnt jump to element by id

  return [y, currentSection];
};
