/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: {
          0: '#0A0A0F',
          1: '#12121A',
          2: '#1A1A24',
          3: '#23232F',
        },
        amber: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        indigo: {
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'glow-indigo':  'radial-gradient(60% 50% at 50% 50%, rgba(99,102,241,0.40) 0%, rgba(99,102,241,0) 70%)',
        'glow-violet':  'radial-gradient(60% 50% at 50% 50%, rgba(139,92,246,0.32) 0%, rgba(139,92,246,0) 70%)',
        'glow-amber':   'radial-gradient(60% 50% at 50% 50%, rgba(245,158,11,0.28) 0%, rgba(245,158,11,0) 70%)',
        'grid-dots':    'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
        'gradient-text':'linear-gradient(135deg, #818CF8 0%, #A78BFA 50%, #FBBF24 100%)',
      },
      boxShadow: {
        'glow-indigo-sm': '0 0 24px -4px rgba(99,102,241,0.55)',
        'glow-indigo':    '0 0 60px -8px rgba(99,102,241,0.55)',
        'glow-violet':    '0 0 60px -8px rgba(139,92,246,0.5)',
        'glow-amber-sm':  '0 0 24px -4px rgba(245,158,11,0.45)',
        'glow-amber':     '0 0 60px -8px rgba(245,158,11,0.55)',
        'glass':          '0 1px 0 0 rgba(255,255,255,0.05) inset, 0 0 0 1px rgba(255,255,255,0.06)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%':      { opacity: '0.85', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        'border-spin': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        shimmer:          'shimmer 2.2s linear infinite',
        'glow-pulse':     'glow-pulse 4s ease-in-out infinite',
        float:            'float 6s ease-in-out infinite',
        'gradient-x':     'gradient-x 6s ease infinite',
        'border-spin':    'border-spin 8s linear infinite',
        marquee:          'marquee 40s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
