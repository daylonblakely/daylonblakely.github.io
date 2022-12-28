import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  /* Add your styles for the nav bar here */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  background-color: #0f111c;

  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`;

const NavBar = ({ sections }) => {
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
    </NavBarContainer>
  );
};

export default NavBar;
