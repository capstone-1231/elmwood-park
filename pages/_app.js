import '../styles/global.css';

import { ThemeProvider } from '@mui/material';
import { theme } from '../utils/theme/theme-config.js';
import CssBaseline from '@mui/material/CssBaseline';

import AdapterDayjs from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Component {...pageProps} />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;


