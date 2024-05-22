import './index.css';
import * as React from 'react';
import { styled } from '@mui/system';
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

  React.useEffect(() => {
    const handleResize = () => {
      // Set a CSS variable for the viewport height
      document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`
      );
    };

    // Initial call to set the value
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const AppContainer = styled('div')(({ theme }) => ({
    height: 'calc(var(--vh, 1vh) * 100)',
    overflow: 'hidden',
  }));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Background />
          <HomePage />
        </AppContainer>

        {/* <NavBar sections={sections} /> */}

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
