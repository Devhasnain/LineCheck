import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppin: ['var(--font-poppin)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: '640px',       // Mobile phones (portrait)
        md: '768px',       // Tablets (portrait)
        lg: '1024px',      // Tablets (landscape) and small laptops
        xl: '1440px',      // Large laptops and desktops
        '2xl': '2560px',   // Larger desktops
      },
      
    },
  },
  plugins: [],
}
export default config
