import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Me from '../assets/me.JPG';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: 'transparent',
  position: 'relative',
  zIndex: 1,
  padding: '0 20px',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    order: 2,
  },
}));

const Content = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '20px',
  [theme.breakpoints.up('md')]: {
    paddingLeft: '10%',
  },
}));

const Header = styled(motion.h1)(({ theme }) => ({
  fontSize: '5rem',
  margin: '0 0 20px 0',
  color: theme.palette.text.primary,

  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
}));

const Summary = styled(motion.p)(({ theme }) => ({
  fontSize: '2.5rem',
  margin: '0 0 40px 0',
  color: theme.palette.text.secondary,
  textAlign: 'left',
  maxWidth: '800px',

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    fontSize: '1.2rem',
  },
}));

const ImageContainer = styled(motion.div)({
  maxWidth: '80%',
  borderRadius: '10%',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const AboutPage = () => {
  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Content>
            <Header
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello! I'm Daylon.
            </Header>
            <Summary
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              I’m a software engineer with a passion for building, learning, and
              improving. From designing clean architectures to optimizing
              performance, I love tackling challenges head-on. Check out my
              work!
            </Summary>
          </Content>
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <ImageContainer
            initial={{ opacity: 1, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <Image src={Me} alt="Your Name" />
          </ImageContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
