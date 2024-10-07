/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // blue-800
        secondary: '#FFFFFF', // white
        accent: '#FEF9C3', // yellow-100
        background: '#f0f1ec', // light gray
        text: '#FFFFFF', // white
        'text-dark': '#111827', // gray-900
        'brand-red': '#dd4c31', // new brand red
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'comic': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}