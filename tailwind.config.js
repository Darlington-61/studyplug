/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#10B981', // Vibrant Emerald
          600: '#0E382B', // Official StudyPlug Chalkboard Forest Green
          700: '#0B2E23',
          800: '#09241B',
          900: '#061A13',
        },
        gold: {
          50: '#FFFDF0',
          100: '#FFFBE6',
          200: '#FFF4BF',
          300: '#FFEB80',
          400: '#FFE033',
          500: '#FFCC00', // Official StudyPlug "Plug" Gold
          600: '#E5B800',
          700: '#B89200',
          800: '#8C6F00',
          900: '#665100',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 14px 0 rgba(11, 46, 35, 0.05)',
        'card-elevated': '0 6px 20px -2px rgba(11, 46, 35, 0.09)',
        'phone': '0 25px 60px -15px rgba(11, 46, 35, 0.25), 0 0 0 1px rgba(11, 46, 35, 0.08)',
        'brand-glow': '0 4px 14px 0 rgba(14, 56, 43, 0.35)',
        'gold-glow': '0 4px 14px 0 rgba(255, 204, 0, 0.35)',
        'purple-glow': '0 4px 14px 0 rgba(14, 56, 43, 0.35)', // Fallback alias
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
