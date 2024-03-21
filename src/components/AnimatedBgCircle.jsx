import React from 'react';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const AnimatedCircle = styled(motion.div)(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  backgroundColor: 'red',
  position: 'absolute',
  zIndex: -1,
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)', // optional shadow

  [theme.breakpoints.up('md')]: {
    marginTop: '15px',
  },
}));

const AnimatedBgCircle = () => {
  return <AnimatedCircle />;
};

export default AnimatedBgCircle;
