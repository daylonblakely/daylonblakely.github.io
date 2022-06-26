import React, { useEffect } from 'react';

export default function FullScreenScroller({ children }) {
  var wheelEvent =
    'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const preventDefaultForScrollKeys = (e) => {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    if (keys[e.keyCode]) {
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

  const handleScroll = (e) => {
    disableCustomScroll();
    console.log('first');
    window.location.href = '#section2';
    // enableCustomScroll();
    // console.log(window.location);

    // const top = document.getElementById('section2').offsetTop;
    // console.log(top);
    // window.scrollTo(0, top);
    // $('html, body').animate({
    //   scrollTop: $('#section2').offset().top
    // }, 800, function(){

    //   // Add hash (#) to URL when done scrolling (default click behavior)
    // window.location.hash = '#section2';
    // });
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

  useEffect(
    () => {
      disableDefaultScroll();
      enableCustomScroll();
      return () => {
        disableCustomScroll();
        enableDefaultScroll();
      };
    },
    [
      // disableDefaultScroll,
      // enableDefaultScroll,
      // enableCustomScroll,
      // disableCustomScroll,
    ]
  );

  return (
    <div
      style={{
        scrollSnapType: 'y mandatory',
        maxHeight: '100vh',
        overflowY: 'hidden',
        scrollBehavior: 'smooth',
      }}
    >
      {children}
    </div>
  );
}
