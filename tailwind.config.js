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
    "./service-details.html",
    "./case-study-1.html",
    "./case-study-2.html",
    "./case-study-details.html",
    "./blog.html",
    "./blog-single.html",
    "./about-us.html",
    "./contact-us-1.html",
    "./contact-us-2.html",
    "./team.html",
    "./pricing-table.html",
    "./seo.html",
    "./faq.html",
    "./tabs.html",
    "./header.html",
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
