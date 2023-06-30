const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins",
        cursive: "Sacramento",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        "blue-ribbon": {
          50: "#f0f6ff",
          100: "#e4eeff",
          200: "#cde0ff",
          300: "#a6c5ff",
          400: "#739eff",
          500: "#3b6cff",
          600: "#1441ff",
          700: "#0033ff",
          800: "#012cd6",
          900: "#0325af",
          950: "#001d77",
        },
        success: "#0070f3",
        cyan: "#79FFE1",
        sky: colors.sky,
        cyan: colors.cyan,
        rose: colors.rose,
        gray: {
          800: "#15161a",
        },
        green: {
          300: "#62FFAA",
        },
        red: {
          300: "#FF8888",
        },
        primary: colors.blue[800],
        dark: "#111114",
        light: "#f5f5f5",
        nav: {
          dark: "#16161a",
          light: "#fafaff",
        },
        scrollbar: {
          track: {
            dark: "#2c2f38",
            light: "#dedfe0",
          },
        },
        footer: {
          dark: "#1c1c21",
          light: "#e3e3e3",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        mono: "Cascadia Code",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
