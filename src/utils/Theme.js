import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#5E5E5E",
      },
    },
  },
  fonts:{
    heading: `Poppins, sans-serif`,
    body: `inter, montserrat, sans-serif`
  },
  colors: {
    red: "#ff0000",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f7fafc",
      900: "#171923",
    },
  },
  Progress: {
    baseStyle: {
        track: { bg: 'transparent'},
        filledTrack: {
            bg: '#ff7C2D'
        }
    },
    sizes: {
        sm: {
            h: '0.625rem',
        },
    },
    variants: {
        yellow: {
            filledTrack: {
                bg: '#FFDE69',
            },
        },
    },
    defaultProps:{
        size: 'sm'
    },
}
},
);
