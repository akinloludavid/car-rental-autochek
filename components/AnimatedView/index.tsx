import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import { IChildren } from '@/utils/types'
import { textVariants } from '@/utils/animations'

interface IAnimationView extends IChildren {
    delay?: number
}
export const AnimatedView = ({ children, delay = 0.2 }: IAnimationView) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
    })
    return (
        <>
            <Box
                ref={ref}
                as={motion.span}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? textVariants(delay) : undefined}
            >
                {children}
            </Box>
        </>
    )
}
