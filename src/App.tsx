import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './utils';
import { PermanentDrawer } from './components';
import { PageHeader } from './components/page-header/PageHeader';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <PermanentDrawer />
        <PageHeader />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
