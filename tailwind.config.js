/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* === MEDICAL COLOR SYSTEM === */
        
        // Medical Primary Blues
        medical: {
          primary: {
            50: 'hsl(var(--medical-primary-50))',
            100: 'hsl(var(--medical-primary-100))',
            200: 'hsl(var(--medical-primary-200))',
            300: 'hsl(var(--medical-primary-300))',
            400: 'hsl(var(--medical-primary-400))',
            500: 'hsl(var(--medical-primary-500))',
            600: 'hsl(var(--medical-primary-600))',
            700: 'hsl(var(--medical-primary-700))',
            800: 'hsl(var(--medical-primary-800))',
            900: 'hsl(var(--medical-primary-900))',
            950: 'hsl(var(--medical-primary-950))',
          },
          
          // Therapeutic Greens
          green: {
            50: 'hsl(var(--medical-green-50))',
            100: 'hsl(var(--medical-green-100))',
            200: 'hsl(var(--medical-green-200))',
            300: 'hsl(var(--medical-green-300))',
            400: 'hsl(var(--medical-green-400))',
            500: 'hsl(var(--medical-green-500))',
            600: 'hsl(var(--medical-green-600))',
            700: 'hsl(var(--medical-green-700))',
            800: 'hsl(var(--medical-green-800))',
            900: 'hsl(var(--medical-green-900))',
          },
          
          // Innovation Purple
          purple: {
            50: 'hsl(var(--medical-purple-50))',
            100: 'hsl(var(--medical-purple-100))',
            200: 'hsl(var(--medical-purple-200))',
            300: 'hsl(var(--medical-purple-300))',
            400: 'hsl(var(--medical-purple-400))',
            500: 'hsl(var(--medical-purple-500))',
            600: 'hsl(var(--medical-purple-600))',
            700: 'hsl(var(--medical-purple-700))',
            800: 'hsl(var(--medical-purple-800))',
            900: 'hsl(var(--medical-purple-900))',
          },
          
          // Premium Grays
          gray: {
            50: 'hsl(var(--medical-gray-50))',
            100: 'hsl(var(--medical-gray-100))',
            200: 'hsl(var(--medical-gray-200))',
            300: 'hsl(var(--medical-gray-300))',
            400: 'hsl(var(--medical-gray-400))',
            500: 'hsl(var(--medical-gray-500))',
            600: 'hsl(var(--medical-gray-600))',
            700: 'hsl(var(--medical-gray-700))',
            800: 'hsl(var(--medical-gray-800))',
            900: 'hsl(var(--medical-gray-900))',
          },
          
          // Alert Colors
          warning: {
            50: 'hsl(var(--medical-warning-50))',
            500: 'hsl(var(--medical-warning-500))',
          },
          error: {
            50: 'hsl(var(--medical-error-50))',
            500: 'hsl(var(--medical-error-500))',
          },
          success: {
            50: 'hsl(var(--medical-success-50))',
            500: 'hsl(var(--medical-success-500))',
          },
        },

        /* === SHADCN SYSTEM INTEGRATION === */
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },

      /* === TYPOGRAPHY === */
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        'medical-xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'medical-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'medical-base': ['1rem', { lineHeight: '1.5rem' }],
        'medical-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'medical-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'medical-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'medical-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'medical-4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
        'medical-5xl': ['3rem', { lineHeight: '3rem', letterSpacing: '-0.025em' }],
        'medical-6xl': ['3.75rem', { lineHeight: '3.75rem', letterSpacing: '-0.025em' }],
      },

      /* === PREMIUM SPACING === */
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },

      /* === ENHANCED RADIUS SYSTEM === */
      borderRadius: {
        'none': '0',
        'sm': 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },

      /* === MEDICAL SHADOWS === */
      boxShadow: {
        'medical-sm': 'var(--medical-shadow-sm)',
        'medical': 'var(--medical-shadow)',
        'medical-lg': 'var(--medical-shadow-lg)',
        'medical-xl': 'var(--medical-shadow-xl)',
        'medical-glow': '0 0 20px hsl(var(--medical-primary-500) / 0.3)',
        'medical-glow-lg': '0 0 40px hsl(var(--medical-primary-500) / 0.2)',
        'medical-inner': 'inset 0 2px 4px 0 hsl(var(--medical-gray-900) / 0.05)',
      },

      /* === ANIMATION SYSTEM === */
      animation: {
        // shadcn defaults
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        
        // Medical specific animations
        'medical-pulse': 'medical-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'medical-bounce-in': 'medical-bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'medical-fade-in': 'medical-fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'medical-slide-in': 'medical-slide-in 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'medical-scale-in': 'medical-scale-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'medical-float': 'medical-float 3s ease-in-out infinite',
        'medical-shimmer': 'medical-shimmer 2s infinite',
        'medical-spin-slow': 'spin 3s linear infinite',
        'medical-ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },

      keyframes: {
        // shadcn defaults
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        
        // Medical animations
        'medical-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        'medical-bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'medical-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'medical-slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'medical-scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'medical-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'medical-shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },

      /* === ENHANCED TRANSITIONS === */
      transitionTimingFunction: {
        'medical-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'medical-ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'medical-ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'medical-ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'medical-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'medical-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },

      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },

      /* === BACKDROP BLUR === */
      backdropBlur: {
        'medical': '20px',
        'medical-lg': '40px',
        'medical-xl': '60px',
      },

      /* === GRADIENTS === */
      backgroundImage: {
        'medical-gradient-primary': 'linear-gradient(135deg, hsl(var(--medical-primary-600)) 0%, hsl(var(--medical-primary-500)) 100%)',
        'medical-gradient-success': 'linear-gradient(135deg, hsl(var(--medical-green-600)) 0%, hsl(var(--medical-green-500)) 100%)',
        'medical-gradient-purple': 'linear-gradient(135deg, hsl(var(--medical-purple-600)) 0%, hsl(var(--medical-purple-500)) 100%)',
        'medical-gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'medical-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },

      /* === Z-INDEX SYSTEM === */
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      /* === CONTAINER QUERIES === */
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    
    // Custom plugin for medical utilities
    function({ addUtilities, theme }) {
      const medicalUtilities = {
        // Glass morphism utilities
        '.glass-light': {
          'background': 'rgba(255, 255, 255, 0.25)',
          'backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.18)',
        },
        '.glass-dark': {
          'background': 'rgba(30, 41, 59, 0.25)',
          'backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(30, 41, 59, 0.18)',
        },
        '.glass-medical': {
          'background': 'hsl(var(--medical-glass))',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'border': '1px solid hsl(var(--border))',
        },
        
        // Text balance utility
        '.text-balance': {
          'text-wrap': 'balance',
        },
        
        // Medical button styles
        '.btn-medical-primary': {
          'background': 'linear-gradient(135deg, hsl(var(--medical-primary-600)) 0%, hsl(var(--medical-primary-500)) 100%)',
          'color': 'white',
          'border': 'none',
          'border-radius': 'var(--radius)',
          'padding': '0.75rem 1.5rem',
          'font-weight': '600',
          'font-size': '0.875rem',
          'transition': 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          'box-shadow': 'var(--medical-shadow)',
          '&:hover': {
            'background': 'linear-gradient(135deg, hsl(var(--medical-primary-700)) 0%, hsl(var(--medical-primary-600)) 100%)',
            'transform': 'translateY(-2px)',
            'box-shadow': 'var(--medical-shadow-lg)',
          }
        },
        
        // Status indicators
        '.status-online': {
          'background': 'hsl(var(--medical-green-500))',
          'box-shadow': '0 0 0 2px hsl(var(--medical-green-500) / 0.2)',
        },
        '.status-busy': {
          'background': 'hsl(var(--medical-error-500))',
          'box-shadow': '0 0 0 2px hsl(var(--medical-error-500) / 0.2)',
        },
        '.status-away': {
          'background': 'hsl(var(--medical-warning-500))',
          'box-shadow': '0 0 0 2px hsl(var(--medical-warning-500) / 0.2)',
        },
      }

      addUtilities(medicalUtilities)
    }
  ],
}