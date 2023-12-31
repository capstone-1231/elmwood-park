import { createTheme } from '@mui/material'

export const themeOptions = {
  
    palette: {
      mode: 'light',
      primary: {
        main: '#d9e2b5',
        contrastText: '#302400',
      },
      secondary: {
        main: '#50891e',
      },
      background: {
        default: '#FFFFF2',
      },
      text: {
        primary: '#816719',
        secondary: '#5C4500',
      },
      button: {
        default: '#BFF1AD'
      },
      link: {
        default: '#0C268D'
      }
    },
    typography: {
      fontFamily: 'Be Vietnam Pro',
      fontSize: '1.1rem',
      h1: {
        fontFamily: 'Libre Baskerville',
        fontSize: '3rem',
        fontWeight: '700',
      },
      htmlFontSize: '1rem',
      h2: {
        fontFamily: 'Libre Baskerville',
        fontSize: '2rem',
        fontWeight: '700',
      },
      h3: {
        fontFamily: 'Libre Baskerville',
        fontSize: '1.2rem',
      },
      h4: {
        fontFamily: 'Libre Baskerville',
        fontSize: '1.1rem',
      },
      h5: {
        fontFamily: 'Libre Baskerville',
        fontSize: '1rem',
      },
      h6: {
        fontFamily: 'Libre Baskerville',
        fontSize: '0.8rem',
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
      button: {
        fontFamily: 'Libre Baskerville',
        textTransform: 'none',
        fontSize: '1rem',
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 300,
        md: 850,
        lg: 1087,
        xl: 1536,
      },
    },
  };

const theme = createTheme(themeOptions);

export { theme }