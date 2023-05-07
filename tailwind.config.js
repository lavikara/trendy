/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{tsx,jsx,js,vue,ts}'],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        red: {
          DEFAULT: '#CD4161',
          bg1: '#FCE9E9',
          bg2: '#db768d'
        },
        blue: {
          DEFAULT: '#24419a',
          bg1: '#fdfcf7',
          bg2: '#082077',
          bg3: '#e6e6fa',
          bg4: '#4d84ff'
        },
        yellow: {
          DEFAULT: '#dbbe65',
          bg1: '#e9dea7',
          bg2: '#fdfcf7'
        },
        orange: { DEFAULT: '#C06C00', bg1: '#ffedd6', bg2: '#E95F5B' },
        gray: {
          DEFAULT: '#8791A7',
          bg1: '#F6F6EB',
          bg2: '#FAF9F6'
        },
        black: {
          DEFAULT: '#1B1B1A',
          bg1: '#363633'
        }
      }
    },
    screens: {
      xxxs: '320px',
      xxs: '375px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '1536px',
      xxxxl: '1900px'
    }
  },
  plugins: []
}
