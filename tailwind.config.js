const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'home': `url('/background/bg-home.jpg')`,
        internal: `url('/background/bg-internal.jpg')`,
      }),
      screens: {
        xs: '531px',
        // sm: '721px',
        // lg: '1481px',
      },
      colors: {
        teal: {
          900: '#1d3941',
          800: '#275a7d',
          700: '#2a7a9d',
          600: '#2fbcbc',
          DEFAULT: '#35F0D0',
          500: '#35F0D0',
          400: '#64f2d9',
          300: '#8bf6e3',
          200: '#b0f8ec',
          100: '#8bf6e3',
        },

        purple: {
          400: 'rgba(165, 151, 250, 1)',
          80: 'rgba(125, 70, 150, 0.8)',
          ...colors.purple,
        },
        white: colors.white,
        gray: colors.gray,
        indigo: colors.indigo,
        red: colors.red,
        yellow: colors.yellow,
      },
      height: {
        '42rem': '42rem',
        '50rem': '50rem',
        '62rem': '62rem',
      },
      fontSize: (fontSizes) => ({
        xxxxxs: '0.5rem',
        xxxxs: '0.625rem',
        xxxs: '0.685rem',
        xxs: '0.735rem',
        xs: '0.8rem',
        ...fontSizes,
      }),
      fontFamily: {
        barlow: [
          'Barlow',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        inter: [
          'Inter',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        sans: [
          'Inter',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  variants: {},
};
