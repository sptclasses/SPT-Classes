/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      /* ================= DROPDOWN ANIMATION ================= */
      keyframes: {
        fadeSlide: {
          "0%": {
            opacity: "0",
            transform: "translate(-50%, -10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, 0)",
          },
        },
      },

      animation: {
        fadeSlide: "fadeSlide 0.25s ease-out",
      },
    },
  },

  plugins: [],
};
