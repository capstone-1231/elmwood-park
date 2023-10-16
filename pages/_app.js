import '../styles/global.css';

import { ThemeProvider } from '@mui/material';
import { theme } from '../utils/theme/theme-config.js'
import CssBaseline from '@mui/material/CssBaseline';



export default function App({ Component, pageProps }) {
    return <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Component {...pageProps} />
  </ThemeProvider>
  }

