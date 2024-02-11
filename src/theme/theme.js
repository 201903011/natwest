import PropTypes from 'prop-types';
import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
// hooks
// import useSettings from '../hooks/useSettings';
//
// import palette from './palette';
// import typography from './typography';
// import breakpoints from './breakpoints';
// import componentsOverride from './overrides';
// import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const theme = createTheme({});

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
