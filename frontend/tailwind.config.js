/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ededed',
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb'
        },
        card: '#171717',
        'card-border': '#262626'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
