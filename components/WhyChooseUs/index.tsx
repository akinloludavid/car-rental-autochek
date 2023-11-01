'use client'
import {
    Box,
    Flex,
    Heading,
    Icon,
    Text,
    Image,
    Grid,
    GridItem,
} from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import React from 'react'
import { whyUs } from './data'

const WhyChooseUs = () => {
    return (
        <Box px='120px' pt='80px'>
            <Heading textAlign={'center'} color='darkTextColor' mb='20px'>
                Why Choose Us
            </Heading>
            <Text
                fontSize={'40px'}
                textAlign={'center'}
                color='black'
                w='50%'
                mx='auto'
                lineHeight='36px'
            >
                We Offer the best experiences with our rental deals
            </Text>
            <Grid templateColumns={'repeat(3,1fr)'}>
                <GridItem colSpan={2}>
                    <Image w='100%' src='/images/bentley.png' alt='bentley' />
                </GridItem>
                <GridItem display={'flex'} alignItems={'center'}>
                    <Flex flexDir={'column'} gap='18px'>
                        {whyUs.map(el => (
                            <Flex key={nanoid()} align='center' gap='16px'>
                                <Box
                                    minW='32px'
                                    minH='32px'
                                    borderRadius={'4px'}
                                    bgColor='pryColor'
                                    display={'flex'}
                                    justifyContent='center'
                                    alignItems={'center'}
                                >
                                    <Icon as={el.icon} color='white' />
                                </Box>
                                <Box>
                                    <Text
                                        color='black'
                                        fontSize={'22px'}
                                        mb='4px'
                                    >
                                        {el.title}
                                    </Text>
                                    <Text
                                        fontSize='12px'
                                        color='darkTextColor'
                                        w='60%'
                                        lineHeight={'14px'}
                                    >
                                        {el.desc}
                                    </Text>
                                </Box>
                            </Flex>
                        ))}
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default WhyChooseUs
