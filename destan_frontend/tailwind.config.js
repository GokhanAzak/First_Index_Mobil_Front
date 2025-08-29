/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: '#6366f1', // soft indigo
          dark: '#4f46e5',
          light: '#a5b4fc',
        },
        accent: {
          DEFAULT: '#ec4899', // pink-500
          dark: '#db2777',
          light: '#f9a8d4',
        },
        secondary: {
          DEFAULT: '#06b6d4', // cyan-500
          dark: '#0891b2',
          light: '#67e8f9',
        },
        info: {
          DEFAULT: '#38bdf8', // sky-400
        },
        warning: {
          DEFAULT: '#fbbf24', // amber-400
        },
        success: {
          DEFAULT: '#22c55e', // green-500
        },
        danger: {
          DEFAULT: '#ef4444', // red-500
        },
      },
    },
  },
  plugins: [],
}
