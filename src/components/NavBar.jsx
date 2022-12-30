import React, { useEffect, useRef, useContext } from 'react';
import { styled } from '@mui/system';
import ColorModeContext from '../context/ColorModeContext';

const NavBarContainer = styled('nav')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50px',

  backgroundColor: theme.palette.primary.main,

  '&.sticky': {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
}));

const NavBar = ({ sections }) => {
  const colorMode = useContext(ColorModeContext);

  // Use a ref to store the nav bar element
  const navRef = useRef(null);
  // Use another ref to store the top position of the nav bar
  const topPosRef = useRef(0);

  // When the component mounts, store the top position of the nav bar
  useEffect(() => {
    topPosRef.current = navRef.current.offsetTop;
  }, []);

  // On scroll, update the position of the nav bar
  const handleScroll = () => {
    if (window.pageYOffset > topPosRef.current) {
      navRef.current.classList.add('sticky');
    } else {
      navRef.current.classList.remove('sticky');
    }
  };

  // Add the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavBarContainer ref={navRef}>
      {sections.map((section, i) => {
        return (
          <a href={`#${section.id}`} key={i}>
            section
          </a>
        );
      })}
      <button onClick={colorMode.toggleColorMode}>toggle color</button>
    </NavBarContainer>
  );
};

export default NavBar;
