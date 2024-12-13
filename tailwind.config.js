/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./home-page.html",
    "./home-page-2.html",
    "./home-page-3.html",
    "./home-page-4.html",
    "./service-1.html",
    "./service-2.html",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1170px",
    },
    extend: {},
  },
  plugins: [],
};
