import { extendTheme } from '@chakra-ui/react'
import mouseDefault from '../../src/assets/mouseDefault.png'
import mousePointerOK from '../../src/assets/mousePointerOK.png'
import mouseGrab from '../../src/assets/mouseGrab.png'
import mouseInput from '../../src/assets/mouseInput.gif'

const customTheme = {
  colors: {
    progressOrange: {
      200: '#ff7c2d',
      500: '#ff7c2d'
    },
    progressYellow: {
      200: '#ffde6a',
      500: '#ffde6a'
    },
    light: {
      background: '#5D5D5D',
      white: '#FFFFFF',
      moves: '#ECECEC',
      movesBorder: '#dbdbdb'
    },
    dark: {
      background: '#2A303C',
      header: '#242933',
      pTitle: '#A6ADBB',
      inputName: '#373C47',
      button: '#323844',
      detalhesBG: '#353b46',
      buttonHover: '#474b54'
    }
  },
  fonts: {
    inter: `'Inter', sans-serif`,
    poppins: `'Poppins', sans-serif`,
    serrat: `'Montserrat', sans-serif`,
    teste: `'Dancing Script', cursive`
  },
  breakpoints: {
    base: '0em', // 0px
    sm: '30em', // 480px
    smm: '40em', // 640px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
    '3xl': '120em', // 1920px
    '4xl': '160em', // 2560px
    '5xl': '192em' // 3072px
  },
  styles: {
    global: {
      '*': {
        cursor: `url(${mouseDefault}), default`
      },

      "button, [role='button']": {
        cursor: `url(${mousePointerOK}), auto`
      },
      _active: {
        cursor: `url(${mouseGrab}), auto`
      },
      "input[type='text'], input[type='number'], textarea": {
        cursor: `url(${mouseInput}), text`
      },
      select: {
        cursor: `url(${mousePointerOK}), pointer`
      },
      option: {
        cursor: `url(${mousePointerOK}), pointer`
      }
    },

    radii: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px'
    },
    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800
    },
    space: {
      px: '1px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem'
    }
  }
}

const theme = extendTheme(customTheme)

export default theme
