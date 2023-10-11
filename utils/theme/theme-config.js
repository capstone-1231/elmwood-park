import { createTheme, createMuiTheme } from '@mui/material'

export const themeOptions = {
    palette: {
      mode: 'light',
      primary: {
        main: '#d9e2b5',
        contrastText: '#707070',
      },
      secondary: {
        main: '#50891e',
      },
      background: {
        default: '#fffff2',
      },
      text: {
        primary: '#816719',
        secondary: '#5C4500',
      },
    },
    typography: {
      fontFamily: 'Be Vietnam Pro',
      fontSize: '1.1rem',
      h1: {
        fontFamily: 'Libre Baskerville',
        fontSize: '7.714285714285715rem',
      },
      htmlFontSize: '1rem',
      h2: {
        fontFamily: 'Libre Baskerville',
        fontSize: '2rem',
      },
      h3: {
        fontFamily: 'Libre Baskerville',
        fontSize: '1.6rem',
      },
      h4: {
        fontFamily: 'Libre Baskerville',
        fontSize: '1.4rem',
      },
      h5: {
        fontFamily: 'Libre Baskerville',
        fontSize: '1.2rem',
      },
      h6: {
        fontFamily: 'Libre Baskerville',
        fontSize: '1rem',
      },
      subtitle1: {
        fontSize: '1rem',
      },
      subtitle2: {
        fontSize: '0.8rem',
      },
      body1: {
        fontSize: '1rem',
      },
      body2: {
        fontSize: '1rem',
      },
      button: {
        fontFamily: 'Libre Baskerville',
        fontSize: '1.5rem',
      },
      caption: {
        fontSize: '1rem',
      },
      overline: {
        fontSize: '1rem',
      },
    },
  };

const theme = createTheme(themeOptions);

export { theme }