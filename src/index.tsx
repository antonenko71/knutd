// library
import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

// dev helper
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from '@utils/dev';

// components
import App from '@app';

// language
import './utils/i18n/index';

// theme
import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import { muiTheme } from '@settings/theme';

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <Suspense
        fallback={
          <Loader>
            <CircularProgress
              sx={{ color: '#c473ea', width: '200px', height: '200px' }}
            />
          </Loader>
        }
      >
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </Suspense>
    </DevSupport>
  </StrictMode>
);
