import { Box, Heading, Text, Link as NavLink } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IBlogsCard {
    image: string
    title: string
    desc: string
    tags: string[]
}
const BlogsCard = ({ image, title, desc, tags }: IBlogsCard) => {
    return (
        <Box p='16px' borderRadius={'8px'}>
            <Box borderRadius={'8px'}>
                <Image src={image} alt='' />
            </Box>
            {tags.map(tag => (
                <Box bg='pryColor' key={nanoid()}>
                    {tag}
                </Box>
            ))}
            <Heading>{title}</Heading>
            <Text>{desc}</Text>

            <NavLink as={Link} href={'/'}>
                Find Out More {'>'}
            </NavLink>
        </Box>
    )
}

export default BlogsCard
