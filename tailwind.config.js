/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007BFF',
          dark: '#0056b3',
        },
        secondary: {
          DEFAULT: '#5b66d8',
          dark: '#1f4777',
        },
        accent: '#FFC107',
        gray: {
          light: '#f8f9fa',
          medium: '#ced4da',
          dark: '#343a40',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 6px 20px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}