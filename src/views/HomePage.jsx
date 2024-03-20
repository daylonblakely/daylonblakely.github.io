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

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));

const ContentContainer = styled('div')(({ theme }) => ({
  textAlign: 'left',
  paddingLeft: '15px',

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    paddingTop: '15px',
    paddingLeft: 0,
  },
}));

const ImageContainer = styled('div')(({ theme }) => ({
  maxWidth: '700px',
  minWidth: '500px',
  width: '100%',
  alignSelf: 'flex-end',
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

const MeImage = () => <img src={Me} width="100%" height="auto" alt="me!" />;

const HomePage = () => {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  useEffect(() => {
    if (imageContainerRef.current) {
      const { x, y } = imageContainerRef.current.getBoundingClientRect();
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
      <ImageContainer ref={imageContainerRef}>
        <Bubble parentRef={imageContainerRef} />
        <MeImage />
      </ImageContainer>
    </HomeContainer>
  );
};

export default HomePage;
