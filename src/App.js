import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';

import ColorModeContext from './context/ColorModeContext';
import { lightTheme, darkTheme } from './theme';
import NavBar from './components/NavBar';
import AnimatedBox from './components/AnimatedBox';
import FullScreenScroller from './components/FullScreenScroller';
import FullScreenSection from './components/FullScreenSection';
// import Background from './assets/background.jpg';

const AppContainer = styled('div')(({ theme }) => ({
  // width: '100%',
  // height: '100vh',
  // backgroundPosition: 'center',
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  // backgroundImage: `url(${Background})`,
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
        <AppContainer>
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
        </AppContainer>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
