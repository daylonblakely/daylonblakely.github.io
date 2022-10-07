import * as React from 'react';
import AnimatedBox from './components/AnimatedBox';
import FullScreenScroller from './components/FullScreenScroller';
import FullScreenSection from './components/FullScreenSection';

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
