import React from 'react';
import { styled } from '@mui/system';

const BackgroundContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: theme.palette.background.default,
}));

const Background = () => {
  return <BackgroundContainer></BackgroundContainer>;
};

export default Background;
