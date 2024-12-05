/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true, // Centers the containe
      padding: "24px", // Adds padding to the container
      screens: {
        DEFAULT: "100%",
        desktop: "1360px",
      },
      maxWidth: {
        DEFAULT: "571px",
        desktop: "1360px",
      },
    },
    screens: {
      desktop: "1360px",
    },
  },
  plugins: [],
};
