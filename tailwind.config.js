/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    colors: {
      'w-dark-blue': '#003c70',
      'w-text-blue': '#0F1B5C',
      'w-blue': '#113BC9',
      'w-orange': '#FE8403',
      'w-light-orange': '#F3953F',
      'w-lighter-orange': '#FFCD00',
      'w-grey': '#7F8293',
    },
    backgroundImage: {
      'index': "url('/images/landscape.png')",
      'company': "url('/images/gas_meter.png')",
      'contact': "url('/images/guadeloupe.jpg')",
      'me': "url('/images/workingEnvironment.png')"
    }
  },
};
export const plugins = [];
