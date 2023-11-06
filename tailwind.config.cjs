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
    screens: {
      xl: "1218px",
    },
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
          DEFAULT: "#fdf0e9",
          subtle: "#f3d1bf",
          emphasis: "#f9e5da",
        },
        foreground: {
          DEFAULT: "#391400",
          subtle: "rgb(57 20 0 / 0.64)",
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
          subtle: "rgb(58 60 86)",
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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.foreground.subtle"),
            "--tw-prose-headings": theme("colors.foreground.DEFAULT"),
            "--tw-prose-counters": theme("colors.foreground.DEFAULT"),
            "--tw-prose-bullets": theme("colors.primary.DEFAULT"),
            "--tw-prose-quotes": theme("colors.foreground.DEFAULT"),
            blockquote: {
              paddingTop: theme("padding[10]"),
              paddingRight: theme("padding[8]"),
              paddingBottom: theme("padding[10]"),
              paddingLeft: theme("padding[8]"),
              backgroundColor: theme("colors.background.emphasis"),
              borderLeft: 0,
              borderRadius: theme("borderRadius.md"),
              fontSize: theme("fontSize[xl]"),
              lineHeight: theme("lineHeight[8]"),
            },
            li: {
              color: theme("colors.foreground.DEFAULT"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
