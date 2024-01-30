import plugin from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#61DBFB",
        "category-personal": "#3A82EE",
        "category-business": "#EA40A4",
      },
    },
  },
  plugins: [plugin],
};
