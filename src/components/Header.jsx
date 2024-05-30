import React from 'react';
import { styled } from '@mui/system';
import ModeToggle from '../components/ModeToggle';

const HeaderContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'absolute',
  top: '15px',
  width: '100%',
  zIndex: 3,
  gap: '20px',
}));

const ModeToggleContainer = styled('div')(({ theme }) => ({
  marginRight: '15px',
}));

const Header = () => {
  return (
    <HeaderContainer>
      <ModeToggleContainer>
        <ModeToggle />
      </ModeToggleContainer>
    </HeaderContainer>
  );
};

export default Header;
