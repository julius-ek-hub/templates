import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '../config/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme()}>
      <CssBaseline enableColorScheme />
      <Paper sx={{ p: 2, height: '100vh', overflow: 'auto' }}>
        <Story />
      </Paper>
    </ThemeProvider>
  ),
];
