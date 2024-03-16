import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import Me from '../assets/me.jpg';

const HomeContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
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
  padding: '20px',
}));

const ImageContainer = styled('div')(({ theme }) => ({
  maxWidth: '700px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    minWidth: '300px',
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
        <h1>Welcome to My Portfolio</h1>
        <p>
          This is the place where I showcase my projects and share my thoughts.
        </p>
      </ContentContainer>
      <ImageContainer>
        <MeImage ref={imageRef} />
      </ImageContainer>
    </HomeContainer>
  );
};

export default HomePage;