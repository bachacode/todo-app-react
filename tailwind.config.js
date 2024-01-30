/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "category-personal": "#3A82EE",
        "category-business": "#EA40A4",
      },
    },
  },
  plugins: [],
};
