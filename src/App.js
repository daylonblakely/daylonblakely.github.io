import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import ColorModeContext from './context/ColorModeContext';
import { lightTheme, darkTheme } from './theme';
import NavBar from './components/NavBar';
import AnimatedBox from './components/AnimatedBox';
import FullScreenScroller from './components/FullScreenScroller';
import FullScreenSection from './components/FullScreenSection';
import Background from './components/Background';
import HomePage from './views/HomePage';

const sections = [
  { id: 'section1', element: <HomePage /> },
  { id: 'section2', element: <AnimatedBox /> },
  { id: 'section3', element: <AnimatedBox /> },
];

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
                {section.element}
              </FullScreenSection>
            );
          })}
        </FullScreenScroller>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
