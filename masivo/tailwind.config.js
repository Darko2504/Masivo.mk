/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#f5f1e6",
        darkBg: "#1c1c1c",
        textLight: "#3e2f2f",
        textDark: "#e0e0e0",
        accent: "#a67c52",
      },

      fontFamily: {
        sans: ["Montserrat", "sans-serif"], 
        serif: ["Playfair Display", "serif"], 
      },
      keyframes: {
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
          "slide-left": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-100%)" },
          },
          "fade-in": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        },
        animation: {
          "slide-down": "slide-down 1s ease-out forwards",
          "fade-in": "fade-in 1s ease-out forwards",
          "slide-left": "slide-left 20s linear infinite",
        },
      },
    },
  },
  plugins: [],
};
