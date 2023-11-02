import { colors } from './colors'

export const HeadingStyle = {
    // style object for base or default style
    baseStyle: {
        color: '#ffffff',
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        h1: {
            fontSize: '56px',
            fontWeight: '700',
            lineHeight: '58px',
            color: colors.textColor,
            letterSpacing: '2px',
        },
        h2: {
            fontSize: '40px',
            fontWeight: '700',
            lineHeight: '44px',
            color: colors.white,
            letterSpacing: '2px',
        },
        h3: {
            fontSize: '24px',
            fontWeight: '600',
            lineHeight: '32px',
            color: colors.white,
        },
        h4: {
            fontSize: '28px',
            fontWeight: '700',
            lineHeight: '28px',
            color: colors.white,
            letterSpacing: '2px',
        },
        h5: {
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '24px',
            color: colors.white,
            letterSpacing: '1.7px',
        },
        h6: {
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '24px',
            color: colors.white,
            letterSpacing: '1.3px',
        },
    },
    // default values for `size` and `variant`
}
