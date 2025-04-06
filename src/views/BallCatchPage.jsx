import React, { useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { motion, useInView } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Hoops from '../assets/RL_Hoops_Demo.mp4';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
  padding: '20px',
  boxSizing: 'border-box',
}));

const Header = styled(motion.h1)(({ theme }) => ({
  fontSize: '4rem',
  color: theme.palette.text.primary,
  textAlign: 'center',
  margin: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
}));

const Description = styled(motion.p)(({ theme }) => ({
  fontSize: '1.5rem',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  maxWidth: '800px',
  margin: '10px auto 20px auto',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
}));

const VideoWrapper = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: '60vh',
});

const Video = styled('video')({
  width: '100%',
  height: '100%',
  maxWidth: '1000px',
  maxHeight: '100%',
  objectFit: 'contain',
  borderRadius: '10px',
});

const GitHubButton = styled(Button)(({ theme }) => ({
  alignSelf: 'center',
  marginTop: '20px',
  fontSize: '1rem',
  zIndex: 4,

  [theme.breakpoints.down('sm')]: {
    marginBottom: '40px', // brings it up slightly from the bottom
  },
}));

const BallCatchPage = () => {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: false, amount: 0.5 });

  useEffect(() => {
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
      <Box>
        <Header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Basketball Catch AI
        </Header>
        <Description
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          This project uses reinforcement learning to train a basketball hoop to
          catch falling balls. The model learns through trial and error,
          improving its positioning over time using a reward system. Watch as it
          goes from clueless to clutch!
        </Description>
      </Box>

      <VideoWrapper>
        <Video ref={videoRef} src={Hoops} loop muted playsInline />
      </VideoWrapper>

      <GitHubButton
        variant="contained"
        color="primary"
        href="https://github.com/daylonblakely/tfjs-catch"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </GitHubButton>
    </Container>
  );
};

export default BallCatchPage;
