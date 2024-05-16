import React, { useState, useEffect, useRef, useContext } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import ColorModeContext from '../context/ColorModeContext';
import Me from '../assets/db_cartoon_no_bg_2.png';
// import Bubble from '../components/Bubble';
import AnimatedCircles from '../components/AnimatedCircles';
import AnimatedLines from '../components/AnimatedLines';
import SocialIcons from '../components/SocialIcons';
import ModeToggle from '../components/ModeToggle';

const HomeContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '100vh', // Changed to 100vh to use viewport height units
  border: '3px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  padding: '20px',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));

const ContentContainer = styled('div')(({ theme }) => ({
  textAlign: 'left',

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    order: 2,
  },
}));

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  flex: '1 1 auto', // Allow the container to grow and shrink as needed
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '40%', // Ensure it does not exceed the parent container's width

  '& > svg': {
    position: 'absolute',
  },

  [theme.breakpoints.down('md')]: {
    minWidth: '300px',
    maxWidth: 'auto',
    flex: '0 1 auto',
  },

  [theme.breakpoints.up('xl')]: {
    // maxWidth: '900px',
  },
}));

const Title = styled('h1')(({ theme }) => ({
  fontSize: '5vw',
  marginBottom: '2px',
  marginTop: 0,
  whiteSpace: 'nowrap',
  color: theme.palette.text.primary,

  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
}));

const IntroText = styled('p')(({ theme }) => ({
  fontSize: '2.5vw',
  marginTop: 0,
  color: theme.palette.text.secondary,

  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
}));

const BubbleContainer = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  position: 'absolute',
  zIndex: -1,
}));

const MeImage = styled('img')(({ theme }) => ({
  width: '100%', // starts at 100% of the parent width
  height: 'auto', // adjusts height automatically to maintain aspect ratio
  objectFit: 'contain', // ensures the image is scaled properly
  borderRadius: '700px',
  maxWidth: '100%', // Ensure the image doesn't exceed the container
}));

const SocialIconContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '20px',
  left: '20px',
}));

const ModeToggleContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '20px',
  right: '20px',
}));

const HomePage = () => {
  const colorMode = useContext(ColorModeContext);

  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const bubbleContainerRef = useRef(null);

  useEffect(() => {
    if (bubbleContainerRef.current) {
      const { x, y } = bubbleContainerRef.current.getBoundingClientRect();
      console.log(x);
      setImagePosition({ x, y });
    }
  }, []);

  return (
    <>
      {/* <AnimatedCircles numberOfCircles={200} /> */}
      <HomeContainer>
        <SocialIconContainer>
          <SocialIcons />
        </SocialIconContainer>

        <ContentContainer>
          <Title>Daylon Blakely</Title>
          <IntroText>Software Engineer</IntroText>
          <Button variant="contained" onClick={colorMode.toggleColorMode}>
            View Portfolio
          </Button>
        </ContentContainer>

        {/* <BubbleContainer ref={bubbleContainerRef}>
        <Bubble parentRef={bubbleContainerRef} />
      </BubbleContainer> */}
        <ImageContainer>
          <AnimatedLines />
          <MeImage src={Me} alt="me!" />
        </ImageContainer>
        <ModeToggleContainer>
          <ModeToggle />
        </ModeToggleContainer>
      </HomeContainer>
    </>
  );
};

export default HomePage;
