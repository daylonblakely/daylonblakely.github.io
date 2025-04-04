import './index.css';
import * as React from 'react';
import { styled } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ColorModeContext from './context/ColorModeContext';
import { getDesignTokens } from './theme';
import Background from './components/Background';
import FullScreenScroll from './components/FullScreenScroll';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import BallCatchPage from './views/BallCatchPage';

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

  const pages = [
    { id: 1, content: <AboutPage />, path: '/about' },
    { id: 2, content: <BallCatchPage />, path: '/rlCatch' },
    { id: 3, content: 'Page 3', path: '/page-3' },
  ];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Background />
          <Header />
          <Router>
            <Routes>
              {pages.map((page) => (
                <Route
                  key={page.id}
                  path={page.path}
                  element={<FullScreenScroll pages={pages} />}
                />
              ))}
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
