import * as React from 'react';
import NavBar from './components/NavBar';
import AnimatedBox from './components/AnimatedBox';
import FullScreenScroller from './components/FullScreenScroller';
import FullScreenSection from './components/FullScreenSection';
import Background from './assets/background.jpg';

const appStyle = {
  width: '100vw',
  height: '100vh',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${Background})`,
};

export default function App() {
  return (
    <div style={appStyle}>
      <NavBar />
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
    </div>
  );
}
