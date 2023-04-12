/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'game-stage': "url('/images/bg-triangle.svg')"
      },
      colors: {
        "dark-text": "hsl(var(--color-dark-text))",
        "score-text": "hsl(var(--color-score-text))",
        "header-outline": "hsl(var(--color-header-outline))",
        "scissors-gradient": "radial-gradient(hsl(39deg 89% 49%), hsl(40deg 84% 53%))",
        "paper-gradient": "radial-gradient(hsl(230deg 89% 62%), hsl(230deg 89% 65%))",
        "rock-gradient": "radial-gradient(hsl(349deg 71% 52%), hsl(349deg 70% 56%))",
      }
    },
  },
  plugins: [],
}