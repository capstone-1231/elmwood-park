import '@fontsource/libre-baskerville/400.css';
import '@fontsource/libre-baskerville/700.css';
import '@fontsource/source-serif-4/400.css';
import '@fontsource/source-serif-4/700.css';
import '@fontsource/source-serif-4/900.css';
import '@fontsource/be-vietnam-pro/400.css';

import { ThemeProvider } from '@mui/material';
import { theme } from '../utils/theme/theme-config.js'

export default function App({ Component, pageProps }) {
    return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  }
