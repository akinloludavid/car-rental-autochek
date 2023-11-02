import {
    Box,
    Heading,
    Text,
    Link as NavLink,
    Image,
    Flex,
} from '@chakra-ui/react'
import { v4 as uuid } from 'uuid'
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
        <Box p='24px' borderRadius={'8px'} bgColor='white'>
            <Box
                borderRadius={'8px'}
                bgColor='secBgColor'
                padding={'40px'}
                mb='16px'
            >
                <Image src={`/images/blogs/${image}`} alt='' />
            </Box>
            <Flex align={'center'} gap='8px'>
                {tags.map(tag => (
                    <Box
                        bg='pryColor'
                        color='white'
                        borderRadius={'4px'}
                        fontWeight='600'
                        px='16px'
                        py='4px'
                        key={uuid()}
                    >
                        #{tag}
                    </Box>
                ))}
            </Flex>
            <Heading color='black' fontSize={'28px'} mt='24px'>
                {title}
            </Heading>
            <Text color='#808080' mt='32px' mb='18px'>
                {desc}
            </Text>

            <NavLink as={Link} href={'/'}>
                Find Out More {'>'}
            </NavLink>
        </Box>
    )
}

export default BlogsCard
