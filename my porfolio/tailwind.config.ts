import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0fe',
          200: '#bae0fd',
          300: '#7cc9fc',
          400: '#36b1f8',
          500: '#0c99e9',
          600: '#0077d6',
          700: '#0061af',
          800: '#005290',
          900: '#004576',
        },
        apple: {
          gray: '#f5f5f7',
          blue: '#0071e3',
          darkblue: '#0077ED',
          black: '#1d1d1f',
          darkgray: '#86868b',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'San Francisco',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale': 'scale 0.5s ease-out',
        'blur-in': 'blurIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        blurIn: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'apple': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'apple-dark': '0 4px 30px rgba(0, 0, 0, 0.3)',
        'apple-hover': '0 8px 32px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'apple': '1.25rem',
      },
    },
  },
  plugins: [],
}

export default config 