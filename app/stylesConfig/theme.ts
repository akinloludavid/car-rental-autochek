import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './customComponents/Button'
import { TextStyle as Text } from './customComponents/Text'
import { HeadingStyle as Heading } from './customComponents/Heading'
import { Space_Grotesk, Lato } from 'next/font/google'
import { colors } from './customComponents/colors'

export const grotesk = Space_Grotesk({ subsets: ['latin'] })
export const lato = Lato({ subsets: ['latin'], weight: '700' })

const components = {
    Button,
    Text,
    Heading,
}
export const customTheme = extendTheme({
    fonts: {
        heading: lato.style.fontFamily,
        body: grotesk.style.fontFamily,
    },
    components,
    colors,
})
