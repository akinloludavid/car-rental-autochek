'use client'
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import React from 'react'
import { whyUs } from './data'

const WhyChooseUs = () => {
    return (
        <Box>
            <Heading textAlign={'center'}>Why Choose Us</Heading>
            <Text textAlign={'center'}>
                We Offer the best experiences with our rental deals
            </Text>
            <Flex>
                <Image src='' alt='' />
                <Box>
                    {whyUs.map(el => (
                        <Flex key={nanoid()}>
                            <Icon as={el.icon} />
                            <Box>
                                <Text>{el.title}</Text>
                                <Text>{el.desc}</Text>
                            </Box>
                        </Flex>
                    ))}
                </Box>
            </Flex>
        </Box>
    )
}

export default WhyChooseUs
