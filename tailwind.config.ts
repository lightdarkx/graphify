import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgba(var(--background))',
        'iris-text': 'rgba(var(--iris-text))',
        'iris-text-2': 'rgba(var(--iris-text-2))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        geist: ['var(--font-geist-sans)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
export default config;
