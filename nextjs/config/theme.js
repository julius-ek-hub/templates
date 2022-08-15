import { createTheme } from '@mui/material/styles';

const styleOverrides = (rootStyle) => ({
  styleOverrides: {
    root: rootStyle,
  },
});

const defaultProps = (props) => ({ defaultProps: props });

const theme = (mode = 'light') => {
  mode = mode === 'dark' ? 'dark' : 'light';
  return createTheme({
    palette: {
      mode,
      ...(mode === 'dark' && {
        background: {
          default: '#1F1B24',
          paper: '#1F1B24',
        },
      }),
    },
    direction: 'rtl',
    components: {
      MuiButtonBase: defaultProps({
        disableRipple: true,
        sx: {
          textTransform: 'none !important',
        },
      }),
      MuiLink: defaultProps({
        underline: 'none',
        href: '#',
        sx: { cursor: 'pointer' },
      }),
      MuiBackdrop: styleOverrides({
        backgroundColor:
          mode === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
      }),
      MuiTypography: styleOverrides({ wordBreak: 'break-all' }),
    },
  });
};

export default theme;
