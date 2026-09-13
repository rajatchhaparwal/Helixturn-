/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep industrial dark backgrounds
        forge: {
          950: '#06080D',
          900: '#0A0D14',
          800: '#10141F',
          700: '#161C2A',
          600: '#1E2636',
          500: '#28324A',
          400: '#364055',
        },
        // Steel / chrome neutrals
        steel: {
          100: '#F0F4FA',
          200: '#D9E2EF',
          300: '#B8C8DC',
          400: '#8CA3BE',
          500: '#607FA0',
          600: '#415E7B',
        },
        // Primary accent: industrial amber-orange
        spark: {
          50:  '#FFF8EE',
          100: '#FFEECE',
          200: '#FFD99A',
          300: '#FFBE5C',
          400: '#FFA52A',
          500: '#FF8C00',
          600: '#E07000',
          700: '#B85200',
          800: '#8A3A00',
          900: '#5C2600',
        },
        // Secondary accent: electric teal
        flux: {
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        graphite: {
          950: '#080B10',
          900: '#0F1419',
          800: '#1A1F2E',
          700: '#242B3D',
          600: '#2D3748',
          500: '#3D4A5C',
          400: '#4A5568',
        },
        industrial: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          900: '#1E3060',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'slide-left': 'slideLeft 0.7s ease-out forwards',
        'slide-right': 'slideRight 0.7s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'pulse-glow-orange': 'pulseGlowOrange 3s ease-in-out infinite',
        'gear-spin': 'gearSpin 25s linear infinite',
        'gear-spin-slow': 'gearSpin 40s linear infinite',
        'gear-spin-rev': 'gearSpinRev 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'count-up': 'countUp 0.5s ease-out forwards',
        'line-grow': 'lineGrow 1s ease-out forwards',
        'scan': 'scan 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(37, 99, 235, 0.5)' },
        },
        pulseGlowOrange: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 140, 0, 0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(255, 140, 0, 0.5)' },
        },
        gearSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        gearSpinRev: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        lineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(100%)' },
        },
      },
      backgroundImage: {
        'grid-dark': 'linear-gradient(rgba(255,140,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,0,0.04) 1px, transparent 1px)',
        'grid-blue': 'linear-gradient(rgba(37, 99, 235, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.04) 1px, transparent 1px)',
        'spark-gradient': 'linear-gradient(135deg, #FF8C00, #FFB347)',
        'forge-gradient': 'linear-gradient(180deg, #06080D, #10141F)',
        'hero-gradient': 'linear-gradient(120deg, rgba(6,8,13,0.95) 0%, rgba(6,8,13,0.7) 50%, rgba(6,8,13,0.4) 100%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
