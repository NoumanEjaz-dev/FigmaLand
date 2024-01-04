/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // backgroundImage: {
      //   "hero-pattern": "url('../../img/bg.')",
      //   "footer-texture": "url('/img/footer-texture.png')",
      // },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
