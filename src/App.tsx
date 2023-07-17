import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './utils';

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
};
