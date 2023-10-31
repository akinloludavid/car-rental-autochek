import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './customComponents/Button'
import { TextStyle as Text } from './customComponents/Text'
import { HeadingStyle as Heading } from './customComponents/Heading'
import { Space_Grotesk } from 'next/font/google'

export const grotesk = Space_Grotesk({ subsets: ['latin'] })

import { colors } from './customComponents/colors'
const components = {
    Button,
    Text,
    Heading,
}
export const customTheme = extendTheme({
    fonts: {
        heading: 'Manrope, sans-serif',
        body: grotesk.style.fontFamily,
    },
    components,
    colors,
})