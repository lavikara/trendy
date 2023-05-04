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
          bg3: '#e6e6fa'
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
        // primary: { DEFAULT: '#4D84FF', white: '#ffffff' }
        // secondary: { DEFAULT: '#001140', dark: '#001E70', light: '#06206B' },
        // error: { DEFAULT: '#EB5757', light: '#F5D5CB' },
        // success: { DEFAULT: '#27AE60', light: '#D7ECD9', lightest: '#E2F8EB' },
        // warning: { DEFAULT: '#E2B93B' },
        // lemon: { DEFAULT: '#EBFFF4' },
        // info: { DEFAULT: '#2F80ED', light: '#B3E0FF' },
        // orange: { DEFAULT: '#C06C00', dark: '#694521', lightest: '#FFF5EA' },
        // pastel3: { DEFAULT: '#E5EDFF' },
        // gray: {
        //   DEFAULT: '#8791A7',
        //   disabled: '#A3A8B3',
        //   dark: '#E1E6F0',
        //   darkest: '#D0D5E0',
        //   light: '#F0F4FD',
        //   light2: '#FAFBFF',
        //   lightest: '#F7F9FD',
        //   lightest1: '#E9EFFF',
        //   lightest2: '#949DBC',
        //   lightest3: '#323E67',
        //   black: '#020B27',
        //   black2: '#222735',
        // bg1: '#4F5877',
        //   bg2: '#1A2139',
        //   bg3: '#F6F6EB',
        //   bg4: '#EFEFEF',
        //   bg5: '#FCFCFC',
        //   bg6: '#F1F3F6'
        // },
        // blue: {
        //   light: '#85d7ff',
        //   DEFAULT: '#1fb6ff',
        //   dark: '#009eeb',
        //   lightest: '#AFCEE9',
        //   lightest1: '#FAFBFF',
        //   lightest2: '##F4F8FF',
        //   pastel: '#D8EFFF',
        //   pastel2: '#C8E8FF',
        //   pastel3: '#E5EDFF',
        //   bg1: '#6695FF',
        //   bg2: '#80A7FF',
        //   bg3: '#C2D3FF',
        //   bg200: '#E6EDFF',
        //   ultramarine: '#2A62F5',
        //   text1: '#2A62F5'
        // },
        // green: { DEFAULT: '1FAD64' },
        // pink: {
        //   light: '#ff7ce5',
        //   DEFAULT: '#ff49db',
        //   dark: '#ff16d1'
        // },
        // black: {
        //   dark: '#1A2139',
        //   DEFAULT: '#020B27',
        //   light: '#4F5877',
        //   lightest: '#ffffff'
        // },
        // purple: {
        //   light: '#4C5B90'
        // }
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
