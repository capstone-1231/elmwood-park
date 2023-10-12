import '../styles/global.css';

import { ThemeProvider } from '@mui/material';
import { theme } from '../utils/theme/theme-config.js'



export default function App({ Component, pageProps }) {
    return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  }

