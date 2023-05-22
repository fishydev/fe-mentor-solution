/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "color-primary": 'rgb(var(--color-primary) / <alpha-value>)',
      "color-secondary": 'rgb(var(--color-secondary) / <alpha-value>)',
      "color-white": 'rgb(var(--color-white) / <alpha-value>)',
    },
    fontFamily: {
      "belle": ["Bellefair", "serif"],
      "barlow": ["Barlow", "sans-serif"],
      "barlow-condensed": ["Barlow Condensed", "sans-serif"],
    }
  },
  plugins: [],
}
