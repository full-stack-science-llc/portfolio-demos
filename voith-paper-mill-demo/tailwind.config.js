/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fss-primary': '#1B365D',
        'fss-secondary': '#2C5282', 
        'fss-accent': '#E53E3E',
        'fss-success': '#38A169',
        'fss-gray': '#718096',
        'fss-charcoal': '#374151',
        // Keep existing Voith colors for the paper mill demo
        'voith-primary': '#005493',
        'voith-blue': '#005493',
        'voith-gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
