import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        12: '12px',
      },
      colors: {
        'purple-site': '#8751BD',
        'blue-site': '#2859B6',
        'primary-blue': '#201867',
        'primary-dark-blue': '#0F0855',
        'primary-gold-yellow': '#D7A866',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade 3s ease-in-out',
      },
      backgroundImage: {
        'header-banner': 'url(/header-banner2.jpg)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
