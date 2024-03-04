/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        secondary: {
          DEFAULT: 'hsl(180, 14%, 20%)',
          light: 'hsl(180, 8%, 52%)',
        },
        tertiary: 'hsl(180, 31%, 95%)',
        accent: 'hsl(180, 52%, 96%)',
        warning: 'hsl(34, 97%, 64%)',
        danger: 'hsl(0, 100%, 63%)',
      },
    },
  },
  plugins: [],
}
