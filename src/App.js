import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
// import ProTip from './ProTip';
import AnimatedBox from './components/AnimatedBox';
import FullScreenScroller from './components/FullScreenScroller';
import FullScreenSection from './components/FullScreenSection';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <FullScreenScroller>
      <FullScreenSection id="section1">
        <AnimatedBox />
        <a href="#section2">Click Me to Smooth Scroll to Section 2 Below</a>
      </FullScreenSection>
      <FullScreenSection id="section2">
        <AnimatedBox />
        <a href="#section1">Click Me to Smooth Scroll to Section 1 Above</a>
      </FullScreenSection>
      <FullScreenSection id="section3">
        <AnimatedBox />
        <a href="#section1">Click Me to Smooth Scroll to Section 1 Above</a>
      </FullScreenSection>
    </FullScreenScroller>
  );
}
