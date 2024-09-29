/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-text": "#3c3d3e",
      },

      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "infinite-scroll-reverse":
          "infinite-scroll-reverse 25s linear infinite",
      },

      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "infinite-scroll-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
