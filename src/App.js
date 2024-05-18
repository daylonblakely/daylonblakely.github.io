import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ColorModeContext from './context/ColorModeContext';
import { getDesignTokens } from './theme';
// import NavBar from './components/NavBar';
// import AnimatedBox from './components/AnimatedBox';
// import FullScreenScroller from './components/FullScreenScroller';
// import FullScreenSection from './components/FullScreenSection';
import Background from './components/Background';
import HomePage from './views/HomePage';

// const sections = [
//   // { id: 'section1', element: <HomePage /> },
//   { id: 'section2', element: <AnimatedBox /> },
//   { id: 'section3', element: <AnimatedBox /> },
// ];

export default function App() {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode]
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Background />
        {/* <NavBar sections={sections} /> */}
        <HomePage />
        {/* <FullScreenScroller>
          {sections.map((section, i) => {
            return (
              <FullScreenSection id={section.id} key={i}>
                {section.element}
              </FullScreenSection>
            );
          })}
        </FullScreenScroller> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
