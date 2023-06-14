/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/styles/*.{js,ts,jsx,tsx,mdx}',
    './app/components/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slowfade: {
          '0%, 50%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        diagonal: {
          '0%': { 'background-position': '0px 720px' },
          '50%': { 'background-position': '720px 0px'},
          '100%': { 'background-position': '0px 720px' }
        },
        pop: {
          '0%': { transform: 'scaleX(1) scaleY(1)' },
          '25%': { transform: 'scaleX(1.05) scaleY(1.05)' },
          '50%': { transform: 'scaleX(1) scaleY(1)' },
          '100%': { transform: 'scaleX(1) scaleY(1)' },
        },
        glow: {
          '0%' : { boxShadow: '0 0 0.5rem #fff' },
          '50%': { boxShadow: '0 0 1rem #fff' },
          '100%': { boxShadow: '0 0 0.5rem #fff' },
        }
      },
      animation: {
        fade: 'fade 1s linear forwards',
        slowfade: 'slowfade 2s linear forwards',
        diagonal: 'diagonal 45s ease-in-out infinite',
        pop: 'pop 3s ease-out infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
