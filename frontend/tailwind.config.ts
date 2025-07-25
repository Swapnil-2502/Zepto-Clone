import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    'index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'search-items': {
          '0%': { opacity: '0' },
          '5%': { opacity: '1' },
          '20%': { opacity: '1' },
          '25%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'search-items': 'search-items 18s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
