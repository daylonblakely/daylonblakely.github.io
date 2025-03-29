import React from 'react';
import { styled } from '@mui/system';
import SocialIcons from '../components/SocialIcons';
import ModeToggle from '../components/ModeToggle';

const FooterContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: '5px',
  width: '100%',
  zIndex: 3,
  gap: '20px',
}));

const SocialIconContainer = styled('div')(({ theme }) => ({
  marginLeft: '20px',
}));

const ModeToggleContainer = styled('div')(({ theme }) => ({
  marginRight: '20px',
  display: 'flex',
}));

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIconContainer>
        <SocialIcons />
      </SocialIconContainer>
      <ModeToggleContainer>
        <ModeToggle />
      </ModeToggleContainer>
    </FooterContainer>
  );
};

export default Footer;
