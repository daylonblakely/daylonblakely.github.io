import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import Me from '../assets/me.jpg';

const HomeContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  height: '100%',
  padding: '2rem 1rem',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '5rem 1rem',
  },
}));

const ContentContainer = styled('div')(({ theme }) => ({
  // padding: '20px',
  // height: '100%',
  // backgroundColor: 'red',
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

const ImageContainer = styled('div')(({ theme }) => ({
  maxWidth: '700px',
  minWidth: '500px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    minWidth: '300px',
  },
}));

const Title = styled('h1')(({ theme }) => ({
  fontSize: '5vw',
  marginBottom: '2px',
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
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      const { x, y } = imageRef.current.getBoundingClientRect();
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
        <MeImage ref={imageRef} />
      </ImageContainer>
    </HomeContainer>
  );
};

export default HomePage;
