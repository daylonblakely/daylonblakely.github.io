import React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

const BackgroundContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: theme.palette.background.default,
  zIndex: -99,
}));

const DiagonalColorOverlay = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',

  background: `linear-gradient(to bottom right, #fff0, #fff0 60%, ${theme.palette.tertiary.main} 50%, ${theme.palette.tertiary.main})`,
}));

const DiagonalShadowOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 2,
  background:
    theme.palette.mode === 'light'
      ? 'linear-gradient(to bottom left, #fff0, #fff0 40%, rgba(0, 0, 0, 0.2))'
      : 'linear-gradient(to top right, #fff0, #fff0 20%, rgba(59, 59, 59, .1), rgba(119, 119, 119, .1), rgba(255, 255, 255, 0.1) )',
}));

const Background = () => {
  return (
    <>
      <BackgroundContainer>
        <DiagonalColorOverlay />
      </BackgroundContainer>
      <DiagonalShadowOverlay />
    </>
  );
};

export default Background;
