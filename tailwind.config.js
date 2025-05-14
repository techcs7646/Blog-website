/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F7FA',
          100: '#E4E7F0',
          200: '#C9D0E1',
          300: '#A3AECB',
          400: '#768CB3',
          500: '#566C99',
          600: '#455782',
          700: '#394867', // Main primary color
          800: '#2D3A53',
          900: '#212B40',
        },
        accent: {
          50: '#FFF5F2',
          100: '#FFE6DF',
          200: '#FFCEC0',
          300: '#FFAD96',
          400: '#FF8E6E', // Main accent color
          500: '#FF6B42',
          600: '#FF4A1A',
          700: '#E53500',
          800: '#B22900',
          900: '#8A2000',
        },
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          700: '#047857',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          700: '#B91C1C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        // 8px spacing system
        '0.5': '4px',
        '1': '8px',
        '1.5': '12px',
        '2': '16px',
        '2.5': '20px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
        '9': '72px',
        '10': '80px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};