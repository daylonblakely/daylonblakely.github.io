import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import Me from '../assets/me.jpg';

const HomeContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '100%',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  //   [theme.breakpoints.up("md")]: {
  //     width: 350
  //   },
  //   [theme.breakpoints.up("lg")]: {
  //     width: 450
  //   },
  //   [theme.breakpoints.up("xl")]: {
  //     width: 550
  //   }
}));

const ContentContainer = styled('div')(({ theme }) => ({
  padding: '20px',
  // flex: 1,
}));

const ImageContainer = styled('div')(({ theme }) => ({
  textAlign: 'center',
  // flex: 1,
  //   width: 400,
  //   maxWidth: '100%',
}));

const MeImage = () => (
  <img
    src={Me}
    width="100%"
    // width={800}
    height="auto"
    style={{ minWidth: 350 }}
    alt="me!"
  />
);

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
