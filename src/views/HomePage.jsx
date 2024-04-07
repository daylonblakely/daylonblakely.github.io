import React, { useState, useEffect, useRef, useContext } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import ColorModeContext from '../context/ColorModeContext';
import Me from '../assets/db_cartoon_no_bg_2.png';
import Bubble from '../components/Bubble';
import AnimatedBgCircle from '../components/AnimatedBgCircle';
import AnimatedLines from '../components/AnimatedLines';

const HomeContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '100dvh',
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
    paddingTop: '15px',
  },
}));

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  maxWidth: '600px',
  flex: 1,
  justifyContent: 'center', // center the image if smaller than the container
  alignItems: 'center', // center the image vertically

  '& > svg': {
    position: 'absolute',
  },

  [theme.breakpoints.down('md')]: {
    minWidth: '300px',
    alignSelf: 'auto',
    width: 'auto',
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

const MeImage = () => (
  <img
    src={Me}
    height="auto"
    alt="me!"
    style={{
      maxWidth: '100%', // allows the image to fill the container width
      maxHeight: '100%', // allows the image to fill the container height
      width: '100%', // starts at 100% of the parent width
      height: 'auto', // adjusts height automatically to maintain aspect ratio
      objectFit: 'contain', // ensures the image is scaled properly
      borderRadius: '700px',
    }}
  />
);

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
    <HomeContainer>
      <ContentContainer>
        <Title>Daylon Blakely</Title>
        <IntroText>Software Engineer</IntroText>
        <Button variant="contained" onClick={colorMode.toggleColorMode}>
          View Portfolio
        </Button>
      </ContentContainer>
      <ImageContainer>
        {/* <BubbleContainer ref={bubbleContainerRef}>
          <Bubble parentRef={bubbleContainerRef} />
        </BubbleContainer> */}
        {/* <AnimatedBgCircle /> */}
        <AnimatedLines />
        <MeImage />
      </ImageContainer>
    </HomeContainer>
  );
};

export default HomePage;
