/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "moderate-blue": "hsl(var(--color-moderate-blue))",
        "soft-red": "hsl(var(--color-soft-red))",
        "light-grayish-blue": "hsl(var(--color-light-grayish-blue))",
        "pale-red": "hsl(var(--color-pale-red))",
        "dark-blue": "hsl(var(--color-dark-blue))",
        "grayish-blue": "hsl(var(--color-grayish-blue))",
        "light-gray": "hsl(var(--color-light-gray))",
        "very-light-gray": "hsl(var(--color-very-light-gray))",
        "white": "hsl(var(--color-white))",
      }
    },
  },
  plugins: [],
}

