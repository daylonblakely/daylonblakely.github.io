import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';

import ColorModeContext from './context/ColorModeContext';
import { lightTheme, darkTheme } from './theme';
import NavBar from './components/NavBar';
import AnimatedBox from './components/AnimatedBox';
import FullScreenScroller from './components/FullScreenScroller';
import FullScreenSection from './components/FullScreenSection';
import { ReactComponent as Test } from './assets/test.svg';

const AppBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100vh',
  zIndex: -999,
  background: theme.palette.background.default,
}));

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
        <AppBackground>
          <Test width="100%" height="100%" preserveAspectRatio="none" />
        </AppBackground>

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
