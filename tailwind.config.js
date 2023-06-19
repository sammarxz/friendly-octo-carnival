/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Epilogue",
        body: "Inter",
      },
      colors: {
        primary: {
          100: "#fff1f0",
          200: "#ffc4be",
          300: "#ff988c",
          400: "#ff6b5a",
          500: "#ff402b",
          600: "#ec1800",
          700: "#b01200",
          800: "#740c00",
          900: "#380600",
        },
      },
    },
  },
  plugins: [],
};
