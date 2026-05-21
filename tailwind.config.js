/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#F4F6FA',
        surface: '#FFFFFF',
        ink: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          DEFAULT: '#2563EB',
        },
        accent: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          500: '#F59E0B',
          600: '#D97706',
          DEFAULT: '#F59E0B',
        },
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          600: '#059669',
          700: '#047857',
        },
        danger: {
          50: '#FFF1F2',
          600: '#E11D48',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        shell: '0 24px 80px rgba(15, 23, 42, 0.10)',
        card: '0 12px 36px rgba(15, 23, 42, 0.07)',
        button: '0 12px 24px rgba(37, 99, 235, 0.22)',
        soft: '0 6px 18px rgba(15, 23, 42, 0.06)',
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        7.5: '1.875rem',
        9.5: '2.375rem',
      },
      screens: {
        xs: '420px',
        '3xl': '1680px',
      },
    },
  },
  plugins: [],
};
