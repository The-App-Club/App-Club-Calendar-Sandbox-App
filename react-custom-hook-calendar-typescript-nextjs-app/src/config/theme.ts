import '@fontsource/inter'
import '@fontsource/radio-canada'
import '@fontsource/noto-sans-jp'

import { extendTheme } from '@mui/joy/styles'
import colors from 'tailwindcss/colors'

// https://github.com/d3/d3-scale-chromatic
// https://github.com/Evercoder/culori
// https://observablehq.com/@d3/color-schemes
// https://mui.com/joy-ui/react-button/
// https://tailwindcss.com/docs/customizing-colors
// https://tailwind.ink/code
const theme = extendTheme({
  fontFamily: {
    body: '"Noto Sans JP", serif',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          ...colors.sky,
          '50': '#f3f8f9',
          '100': '#daf1fa',
          '200': '#afe0f5',
          '300': '#7cc2e7',
          '400': '#479ed3',
          '500': '#357dc0',
          '600': '#2d62a9',
          '700': '#254a87',
          '800': '#1b3260',
          '900': '#101f3f',
        },
        neutral: {
          ...colors.gray,
        },
        danger: {
          ...colors.red,
          '50': '#FEF7F4',
          '100': '#FBE0DD',
          '200': '#F2AFB3',
          '300': '#EC798B',
          '400': '#DC5472',
          '500': '#BC3263',
          '600': '#98184D',
          '700': '#73123F',
          '800': '#560E39',
          '900': '#3B0427',
        },
        info: {
          ...colors.slate,
        },
        success: {
          ...colors.green,
          '50': '#F2FEEE',
          '100': '#CFF7C9',
          '200': '#91E396',
          '300': '#52D080',
          '400': '#3EB574',
          '500': '#288D60',
          '600': '#216B44',
          '700': '#18533A',
          '800': '#113B34',
          '900': '#0A2627',
        },
        warning: {
          ...colors.amber,
        },
      },
    },
  },
  components: {
    JoyLink: {
      styleOverrides: {
        root: {
          display: 'block',
          color: '#000000',
          fontFamily: '"Noto Sans JP", sans-serif',
        },
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Noto Sans JP", sans-serif',
        },
      },
    },
    JoyFormLabel: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: '1.5rem' /* 24px */,
      lineHeight: '2rem' /* 32px */,
    },
    h2: {
      fontSize: '1.25rem' /* 20px */,
      lineHeight: '1.75rem' /* 28px */,
    },
    h3: {
      fontSize: '1.125rem' /* 18px */,
      lineHeight: '1.75rem' /* 28px */,
    },
    display1: {
      fontFamily: 'Inter, sans-serif',
    },
    display2: {
      fontFamily: '"Radio Canada", sans-serif',
    },
  },
})

export default theme
