export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#EE3C2F',
          },
          secondary: {
            main: '#00CC88',
          },
          tertiary: { main: '#3F84E5' },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#EE3C2F',
          },
          secondary: {
            main: '#00CC88',
          },
          tertiary: { main: '#3F84E5' },
        }),
  },
});
