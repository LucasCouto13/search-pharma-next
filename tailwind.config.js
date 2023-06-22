/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-baiJamjuree)',
      },
      colors: {
        purple: {
          20: '#9DB2FF',
          50: '#5C79E2',
          200: '#596EBA',
        },
        gray: {
          100: '#DFDFDF',
        },
        green: {
          900: '#C8E6C9',
        },
      },
      margin: {
        '305px': '305px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
