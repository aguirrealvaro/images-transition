/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1440px" },
      lg: { max: "1280px" },
      md: { max: "992px" },
      sm: { max: "768px" },
      xs: { max: "480px" },
    },
    extend: {
      colors: {
        "text-heading": "var(--text-heading)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
      },
      flex: {
        1.5: "1.5 1.5 0%",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 150ms ease-in",
      },
      transitionProperty: {
        flex: "flex",
        height: "height",
      },
    },
  },
  plugins: [],
};
