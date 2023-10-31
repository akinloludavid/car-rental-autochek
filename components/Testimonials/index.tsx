import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    return (
        <Flex padding='72px 32px' bgColor={'mainBgColor'}>
            <Box>
                <Heading>Testimonials</Heading>
                <Text>Our Client's Reviews and Testimonials</Text>
                <Text>
                    The majority of our users tell us that readable content
                    distracts readers majority of our users tell us is readable.
                </Text>
                <Text>
                    There are amazing people who work here who are down to earth
                    and are willing to work with anyone! Their priority is to
                    take care of their own and make sure you're satisfied! It is
                    take care of their own and make sure you're satisfied
                </Text>
                <Flex>
                    <Text>5.0</Text>
                </Flex>
                <Flex>
                    <Image src='' alt='' />
                    <Box>
                        <Heading>Wade Warren</Heading>
                        <Text>Owner, Co working space</Text>
                    </Box>
                </Flex>
            </Box>
            <Box></Box>
        </Flex>
    )
}

export default Testimonials
