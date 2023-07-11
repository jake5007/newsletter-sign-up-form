/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pTomato: "hsl(4, 100%, 67%)",
        dsGrey: "hsl(234, 29%, 20%)",
        cGrey: "hsl(235, 18%, 26%)",
        nGrey: "hsl(231, 7%, 60%)",
        nWhite: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      sm: "376px",
    },
  },
  plugins: [],
};
