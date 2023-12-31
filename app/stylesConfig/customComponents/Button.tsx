export const ButtonStyles = {
    // style object for base or default style
    baseStyle: {
        outline: 'none',
        _focus: { boxShadow: 'none' },
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        primary: (props: any) => ({
            bg: 'pryColor',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '18px',
            color: 'white',
            height: '48px',
            padding: '16px 32px',
            borderRadius: '4px',

            '@media (max-width:480px)': {
                maxWidth: '100%',
            },
        }),
        secondary: (props: any) => ({
            bg: 'white',
            fontSize: '13px',
            fontWeight: '600',
            lineHeight: '18px',
            color: 'black',
            height: '48px',
            padding: '16px 32px',
            borderRadius: '4px',

            '@media (max-width:480px)': {
                maxWidth: '100%',
            },
        }),
        link: (props: any) => ({
            padding: '16px 32px',
            fontSize: '13px',
            fontWeight: '700',
            lineHeight: '18px',
            borderRadius: '4px',
            border: '0px',
            bgColor: 'none',
            color: '#D87D4A',
            opacity: '1',
            textDecoration: 'none',

            '@media (max-width:480px)': {
                maxWidth: '100%',
            },
        }),
    },

    // default values for `size` and `variant`
    defaultProps: {
        variant: 'primary',
    },
}
