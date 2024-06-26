import React from 'react';
import { styled } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledSocialIcons = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: (theme) => theme.spacing(2),
});

const StyledLink = styled('a')({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    color: 'primary',
  },
});

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <StyledLink href="mailto:daylonblakely@gmail.com">
        <EmailIcon color="primary" fontSize="large" />
      </StyledLink>
      <StyledLink
        href="https://www.linkedin.com/in/daylon-blakely/"
        target="_blank"
      >
        <LinkedInIcon color="primary" fontSize="large" />
      </StyledLink>
      <StyledLink href="https://github.com/daylonblakely" target="_blank">
        <GitHubIcon color="primary" fontSize="large" />
      </StyledLink>
      <StyledLink href="https://www.instagram.com/day96day/" target="_blank">
        <InstagramIcon color="primary" fontSize="large" />
      </StyledLink>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
