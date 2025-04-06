import React from 'react';
import { styled } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';

const HeaderContainer = styled('div')(({ theme }) => ({
  position: 'fixed', // Stick to the viewport
  top: '15px',
  left: '20px',
  zIndex: 998, // Ensure it's above everything else
}));

const StyledLink = styled('a')({
  zIndex: 999,
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    color: 'primary',
    transform: 'scale(1.1)',
  },
});

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink href="/">
        <HomeIcon color="primary" fontSize="inherit" sx={{ fontSize: 30 }} />
      </StyledLink>
    </HeaderContainer>
  );
};

export default Header;
