import React, { useContext, useState } from 'react';
import { useTheme } from '@mui/system';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import ColorModeContext from '../context/ColorModeContext';

const ModeToggle = () => {
  const colorMode = useContext(ColorModeContext);

  //   const theme = useTheme();

  return (
    <IconButton onClick={colorMode.toggleColorMode} color="secondary">
      {colorMode.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ModeToggle;
