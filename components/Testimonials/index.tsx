'use client'
import {
    Box,
    Flex,
    Grid,
    Heading,
    Icon,
    Text,
    Image,
    GridItem,
} from '@chakra-ui/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Testimonials = () => {
    return (
        <Grid
            templateColumns={'repeat(5,1fr)'}
            padding='160px 120px'
            bgColor={'mainBgColor'}
        >
            <GridItem colSpan={2}>
                <Flex flexDirection={'column'} gap='28px'>
                    <Heading fontSize={'18px'}>Testimonials</Heading>
                    <Text fontSize={'48px'} lineHeight={'48px'}>
                        Our Client's Reviews and Testimonials
                    </Text>
                    <Text>
                        The majority of our users tell us that readable content
                        distracts readers majority of our users tell us is
                        readable.
                    </Text>
                    <Text>
                        There are amazing people who work here who are down to
                        earth and are willing to work with anyone! Their
                        priority is to take care of their own and make sure
                        you're satisfied! It is take care of their own and make
                        sure you're satisfied
                    </Text>
                    <Flex align={'center'} gap='2px'>
                        {new Array(5).fill(0).map(el => (
                            <Icon as={AiFillStar} color='pryColor' />
                        ))}
                        <Text ml='8px'>5.0</Text>
                    </Flex>
                    <Flex gap='24px' align={'center'}>
                        <Image
                            src='/images/wade.jpg'
                            alt=''
                            borderRadius={'full'}
                            width={'48px'}
                            height={'48px'}
                        />
                        <Box>
                            <Heading fontSize={'24px'}>Wade Warren</Heading>
                            <Text>Owner, Co working space</Text>
                        </Box>
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem alignItems={'center'} colSpan={3}>
                <Image my='auto' src='/images/benz.png' />
            </GridItem>
        </Grid>
    )
}

export default Testimonials
