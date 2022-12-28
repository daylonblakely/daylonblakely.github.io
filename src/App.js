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

const sections = [{ id: 'section1' }, { id: 'section2' }, { id: 'section3' }];

export default function App() {
  return (
    <div style={appStyle}>
      <NavBar sections={sections} />
      <FullScreenScroller>
        {sections.map((section, i) => {
          return (
            <FullScreenSection id={section.id} key={i}>
              <AnimatedBox />
            </FullScreenSection>
          );
        })}
      </FullScreenScroller>
    </div>
  );
}
