import React from 'react';
import { styled } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledSocialIcons = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: (theme) => theme.spacing(2),
});

const StyledLink = styled('a')({
  zIndex: 999,
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    color: 'primary',
    transform: 'scale(1.1)',
  },
});

const SocialIcons = ({ fontSize }) => {
  return (
    <StyledSocialIcons>
      <StyledLink href="mailto:daylonblakely@gmail.com">
        <EmailIcon color="primary" fontSize="inherit" sx={{ fontSize }} />
      </StyledLink>
      <StyledLink
        href="https://www.linkedin.com/in/daylon-blakely/"
        target="_blank"
      >
        <LinkedInIcon color="primary" fontSize="inherit" sx={{ fontSize }} />
      </StyledLink>
      <StyledLink href="https://github.com/daylonblakely" target="_blank">
        <GitHubIcon color="primary" fontSize="inherit" sx={{ fontSize }} />
      </StyledLink>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
