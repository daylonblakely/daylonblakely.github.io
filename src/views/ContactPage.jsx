import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Me from '../assets/spinBall.jpg';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: 'transparent',
  padding: '0 20px',
  textAlign: 'center',
}));

const Content = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '20px',

  [theme.breakpoints.up('md')]: {
    paddingLeft: '10%',
    textAlign: 'left',
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
  maxWidth: '800px',
  [theme.breakpoints.down('md')]: {
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
  //   objectFit: 'cover',
});

const ContactPage = () => {
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
              Let's Connect!
            </Header>
            <Summary
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              Whether it's about tech, AI, or just basketball talk, feel free to
              reach out! You can find me on LinkedIn, GitHub, or shoot me an
              email.
            </Summary>
          </Content>
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <ImageContainer
            initial={{ opacity: 1, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <Image src={Me} alt="DB" />
          </ImageContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
