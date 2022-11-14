import { createTheme } from '@mui/material/styles';
import {
  createBreakpoints,
  createPalette,
  createSpacing,
  createTypography,
  createZIndexes,
  createShadows,
  createFonts,
} from 'theme/theming';

const Theme = createTheme({
  palette: createPalette(),
  typography: createTypography(),
  zIndex: createZIndexes(),
  spacing: createSpacing(),
  breakpoints: createBreakpoints(),
  shadows: createShadows(),
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        ${createFonts()}
        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          box-sizing: border-box;
          *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          },
        },
      `,
    },
  },
});

export default Theme;
