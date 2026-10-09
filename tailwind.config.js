/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./src/data/**",
  ],
  theme: {
    extend: {
      colors: {
        // StudyPlug Official Design System (DARK NAVY + YELLOW + WHITE)
        sp: {
          // 1. Primary Dark Navy
          'navy-primary': '#001028',
          'dark-navy': '#001028',
          // 2. Deep Navy
          'navy-deep': '#001830',
          'deep-navy': '#001830',
          // 3. Midnight Navy
          'navy-midnight': '#001020',
          'midnight-navy': '#001020',
          // 4. StudyPlug Yellow (Main Accent)
          'yellow': '#F8C800',
          'yellow-main': '#F8C800',
          // 5. Bright Yellow (Secondary Highlight)
          'yellow-bright': '#FFD21F',
          'bright-yellow': '#FFD21F',
          // 6. White
          'white': '#FFFFFF',
          // 7. Off-White
          'offwhite': '#F8F8F8',
          'bg': '#F8F8F8',
          'card': '#FFFFFF',
          // 8. Light Grey
          'grey-light': '#E8E8E8',
          'border': '#E8E8E8',
          // 9. Secondary Text
          'text-secondary': '#607080',
          'secondary-text': '#607080',
          'text': '#001028',
          'text-muted': '#607080',
          // Semantic Helpers
          'blue': '#1D4ED8',
          'purple': '#7C3AED',
          'red': '#EF4444',
          'orange': '#F59E0B',
        },
        brand: {
          50: '#F8F8F8',
          100: '#E8E8E8',
          200: '#D1D5DB',
          300: '#9CA3AF',
          400: '#607080',
          500: '#001830',
          600: '#001028',
          700: '#001020',
          800: '#000814',
          900: '#00040A',
        },
      },
      fontFamily: {
        sans: ['"Poppins"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(0, 16, 40, 0.05)',
        floating: '0 4px 20px rgba(0, 16, 40, 0.08)',
        card: '0 2px 12px rgba(0, 16, 40, 0.06)',
      },
      borderRadius: {
        card: '20px',
        feature: '22px',
        btn: '9999px',
        search: '14px',
        icon: '14px',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
