import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import ColorModeContext from './context/ColorModeContext';
import { lightTheme, darkTheme } from './theme';
import NavBar from './components/NavBar';
import AnimatedBox from './components/AnimatedBox';
import FullScreenScroller from './components/FullScreenScroller';
import FullScreenSection from './components/FullScreenSection';
// import Background from './assets/background.jpg';
// import Background from './assets/me.jpg';
import Background from './components/Background';

const sections = [{ id: 'section1' }, { id: 'section2' }, { id: 'section3' }];

export default function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
        <Background />
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
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
