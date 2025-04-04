import React, { useRef } from 'react';
import { styled } from '@mui/material/styles';
import { motion, useInView } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Hoops from '../assets/RL_Hoops_Demo.mp4';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: 'transparent',
  position: 'relative',
  zIndex: 1,
  padding: '0 20px',
}));

const Content = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '20px',
  textAlign: 'center',
}));

const Header = styled(motion.h1)(({ theme }) => ({
  fontSize: '4rem',
  margin: '0 0 20px 0',
  color: theme.palette.text.primary,

  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
}));

const Description = styled(motion.p)(({ theme }) => ({
  fontSize: '1.5rem',
  margin: '0 0 30px 0',
  color: theme.palette.text.secondary,
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',

  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
}));

const VideoContainer = styled(motion.div)({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto 30px auto',
});

const Video = styled('video')({
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
});

const GitHubButton = styled(Button)(({ theme }) => ({
  marginTop: '20px',
  fontSize: '1rem',
}));

const BallCatchPage = () => {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: false, amount: 0.5 });

  React.useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Content>
            <Header
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Basketball Catch AI
            </Header>
            <Description
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              This project uses reinforcement learning to train a basketball
              hoop to catch falling balls. The model learns through trial and
              error, improving its positioning over time using a reward system.
              Watch as it goes from clueless to clutch!
            </Description>
            <VideoContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <Video ref={videoRef} src={Hoops} loop muted playsInline />
            </VideoContainer>
            <GitHubButton
              variant="contained"
              color="primary"
              href="https://github.com/daylonblakely/tfjs-catch"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </GitHubButton>
          </Content>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BallCatchPage;
