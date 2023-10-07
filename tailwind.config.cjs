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
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        xl: "1218px",
      },
    },
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
          subtle: "#f3d1bf",
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
          DEFAULT: "#b550f8",
          foreground: colors.white,
        },
        tertiary: {
          DEFAULT: "#28293e",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
