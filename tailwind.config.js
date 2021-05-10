const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "bg-home": "url('/background/bg-home.png')",
        internal: "url('/background/bg-internal.png')",
      }),
      colors: {
        teal: {
          900: "#1d3941",
          800: "#29a3a3",
          700: "#2fbcbc",
          600: "#39e4c5",
          DEFAULT: "#35F0D0",
          500: "#35F0D0",
          400: "#64f2d9",
          300: "#8bf6e3",
          200: "#b0f8ec",
          100: "#8bf6e3",
        },
        black: {
          60: "rgba(17, 17, 17, 0.6)",
          ...colors.black,
        },
        purple: {
          400: "rgba(165, 151, 250, 1)",
        },
        white: colors.white,
        gray: colors.gray,
        indigo: colors.indigo,
        red: colors.red,
        yellow: colors.yellow,
      },
      height: {
        "42rem": "42rem",
        "50rem": "50rem",
        "62rem": "62rem",
      },
    },
  },
  variants: {
    // extend: {},
  },
  // plugins: [],
};
