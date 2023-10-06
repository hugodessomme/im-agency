const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Overrides
    fontFamily: {
      sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      // Uncomment if you need it!
      // heading: ["var(--font-heading)", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
      extrabold: "800",
      black: "900",
    },

    // Extends
    extend: {
      colors: {
        background: {
          DEFAULT: "#fdf0e9",
          emphasis: "#f9e5da",
        },
        foreground: {
          subtle: "rgb(57 20 0 / 0.64)",
          DEFAULT: "#391400",
        },
        primary: {
          DEFAULT: "#ef6d58",
          foreground: colors.white,
        },
        secondary: {
          DEFAULT: "#28293e",
          foreground: colors.white,
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
