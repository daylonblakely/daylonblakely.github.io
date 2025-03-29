import React from 'react';
import { styled } from '@mui/system';

const HeaderContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  top: '15px',
  width: '100%',
  zIndex: 3,
  gap: '20px',
}));

const Header = () => {
  return <HeaderContainer></HeaderContainer>;
};

export default Header;
