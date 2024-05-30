import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: 'transparent',
  position: 'relative',
  zIndex: 1,
  padding: '0 20px',
}));

const Content = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '20px',
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('md')]: {
    paddingLeft: '10%',
  },
}));

const Header = styled(motion.h1)(({ theme }) => ({
  fontSize: '3rem',
  margin: '0 0 20px 0',
  color: theme.palette.primary.main,
}));

const Summary = styled(motion.p)(({ theme }) => ({
  fontSize: '1.2rem',
  margin: '0 0 40px 0',
  color: theme.palette.secondary.main,
  textAlign: 'left',
  maxWidth: '800px',
}));

const ImageContainer = styled(motion.div)({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const AboutPage = () => {
  const theme = useTheme();

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
              Hello, I'm [Your Name]
            </Header>
            <Summary
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              I am a passionate software developer with experience in building
              dynamic and responsive web applications. I enjoy working with
              modern technologies and constantly learning new things to enhance
              my skills. Welcome to my portfolio!
            </Summary>
          </Content>
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <ImageContainer
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <Image src="[Your Image URL]" alt="Your Name" />
          </ImageContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
