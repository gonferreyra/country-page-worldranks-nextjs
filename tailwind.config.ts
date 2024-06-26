import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-image': 'url("/hero-image-wr.jpg")',
      },
      colors: {
        'white-text': '#d2d5da',
        'blue-text': '#4e80ee',
        'gray-text': '#6c727f',
        'dark-text': '#1b1d1f',
        'dark-light-text': '#282b30',
      },
    },
  },
  plugins: [],
};
export default config;
