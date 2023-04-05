import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({
    semanticTokens: {
        colors: {
          error: 'red.500',
          success: 'green.500',
          primary: {
            default: 'red.500',
            _dark: 'red.400',
          },
          secondary: {
            default: 'red.800',
            _dark: 'red.700',
          },
        },
      },

    baseStyles : {
        colors: {
            brand: {
                100:"#f7fafc",
                200:"#1a202c"
            }
        },
        fontWeight:'bold',
        textTransform:"uppercase",
        borderRadius:"20px"
    },

    sizes: {
        sm: {
            fontSize:'sm',
            px:4,
            py:6,

        },
        md: {
            fontSize:'md',
            px:6,
            py:2

        }
    },
    variants: {
        outline: {
            border:"2px solid",
            borderColor:"purple.500",
            color:"white"
        },
        solid: {
            bg:"red",
            color:"white"
        }
    },
    defaultProps: {

        size:"md",
        variant:"outline"
    }

    
})