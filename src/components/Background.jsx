import React from 'react';
import { styled } from '@mui/system';
import Me from '../assets/me.jpg';

const MeImage = styled('div')(({ theme }) => ({
  width: '50%',
  height: '50vh',
  position: 'relative',
  left: 600,
  top: 300,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${Me})`,
}));

const BackgroundContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: theme.palette.background.default,
}));

const Background = () => {
  return (
    <BackgroundContainer>
      <MeImage />
    </BackgroundContainer>
  );
};

export default Background;
