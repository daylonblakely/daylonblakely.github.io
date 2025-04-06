import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Me from '../assets/db_cartoon_no_bg.png';
import AnimatedLines from '../components/AnimatedLines';

const HomeContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh', // Changed to 100vh to use viewport height units
  border: '3px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  padding: '20px',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));

const ContentContainer = styled('div')(({ theme }) => ({
  textAlign: 'left',
  zIndex: 3,

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    order: 2,
  },
}));

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  flex: '1 1 auto', // Allow the container to grow and shrink as needed
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '40%', // Ensure it does not exceed the parent container's width

  '& > svg': {
    position: 'absolute',
  },

  [theme.breakpoints.down('md')]: {
    minWidth: '300px',
    maxWidth: '50%',
    flex: '0 1 auto',
  },

  [theme.breakpoints.up('xl')]: {
    maxWidth: '30%',
  },
}));

const Title = styled(motion.h1)(({ theme }) => ({
  fontSize: '5rem',
  margin: '0 0 2px 0',
  whiteSpace: 'nowrap',
  color: theme.palette.text.primary,

  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
}));

const IntroText = styled(motion.p)(({ theme }) => ({
  fontSize: '2.5rem',
  margin: '0 0 20px 0',
  color: theme.palette.text.secondary,
  textAlign: 'left',
  maxWidth: '500px',

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    fontSize: '1.2rem',
  },
}));

const MeImage = styled('img')(({ theme }) => ({
  width: '100%', // starts at 100% of the parent width
  height: 'auto', // adjusts height automatically to maintain aspect ratio
  objectFit: 'contain', // ensures the image is scaled properly
  borderRadius: '700px',
  maxWidth: '100%', // Ensure the image doesn't exceed the container
}));

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeContainer>
        <ContentContainer>
          <Title
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Daylon Blakely
          </Title>
          <IntroText
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            Software Engineer
          </IntroText>
          <Button
            variant="contained"
            // sx={{ marginTop: '20px' }}
            onClick={() => navigate('/about')}
          >
            View Portfolio
          </Button>
        </ContentContainer>
        <ImageContainer>
          <AnimatedLines />
          <MeImage src={Me} alt="me!" />
        </ImageContainer>
      </HomeContainer>
    </>
  );
};

export default HomePage;
