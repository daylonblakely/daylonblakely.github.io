import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import Me from '../assets/db_cartoon_no_bg.png';
import Bubble from '../components/Bubble';

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
  padding: '15px 15px 0px 15px',

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
  maxWidth: '700px',
  minWidth: '500px',
  width: '100%',
  alignSelf: 'flex-end',
  position: 'relative',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    minWidth: '300px',
    alignSelf: 'auto',
    width: 'auto',
    '& > img': {
      borderRadius: '300px',
    },
  },
}));

const Title = styled('h1')(({ theme }) => ({
  fontSize: '5vw',
  marginBottom: '2px',
  marginTop: 0,
  whiteSpace: 'nowrap',

  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
}));

const IntroText = styled('p')(({ theme }) => ({
  fontSize: '2.5vw',
  marginTop: 0,

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

const BgCircle = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  backgroundColor: 'red',
  position: 'absolute',
  zIndex: -1,

  [theme.breakpoints.up('md')]: {
    marginTop: '15px',
  },
}));

const MeImage = () => <img src={Me} width="100%" height="auto" alt="me!" />;

const HomePage = () => {
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
        <Button variant="contained">View Portfolio</Button>
      </ContentContainer>
      <ImageContainer>
        {/* <BubbleContainer ref={bubbleContainerRef}>
          <Bubble parentRef={bubbleContainerRef} />
        </BubbleContainer> */}
        <BgCircle />
        <MeImage />
      </ImageContainer>
    </HomeContainer>
  );
};

export default HomePage;
