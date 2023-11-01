'use client'
import {
    Box,
    Button,
    Divider,
    Flex,
    Grid,
    GridItem,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Link as NavLink,
    Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import {
    resourcesLinks,
    servicesLinks,
    socialMediaLinks,
    supportLinks,
} from './data'
import { nanoid } from 'nanoid'
import { FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <Box px='120px' bgColor='mainBgColor' py='36px'>
            <Grid templateColumns={'repeat(7,1fr)'} gap='48px'>
                <GridItem
                    colSpan={2}
                    display='flex'
                    flexDir={'column'}
                    justifyContent='center'
                    gap='8px'
                >
                    <Heading variant={'h3'}>Car Rental</Heading>
                    <Text>
                        Anywhere, anytime, we always provide the best service
                    </Text>
                    <Flex align={'center'} gap='8px'>
                        <Icon as={FaEnvelope} color='pryColor' />
                        <Text>Youremail@.com</Text>
                    </Flex>
                </GridItem>
                <GridItem colSpan={1}>
                    <Heading variant={'h6'} mb='36px'>
                        Services
                    </Heading>
                    <Flex flexDir={'column'} gap='16px'>
                        {servicesLinks.map(el => (
                            <NavLink
                                color='white'
                                key={nanoid()}
                                as={Link}
                                href={el.route}
                            >
                                {el.label}
                            </NavLink>
                        ))}
                    </Flex>
                </GridItem>

                <GridItem colSpan={1}>
                    <Heading variant={'h6'} mb='36px'>
                        Resources
                    </Heading>
                    <Flex flexDir={'column'} gap='16px'>
                        {resourcesLinks.map(el => (
                            <NavLink
                                color='white'
                                key={nanoid()}
                                as={Link}
                                href={el.route}
                            >
                                {el.label}
                            </NavLink>
                        ))}
                    </Flex>
                </GridItem>
                <GridItem colSpan={1}>
                    <Heading variant={'h6'} mb='36px'>
                        Support
                    </Heading>
                    <Flex flexDir={'column'} gap='16px'>
                        {supportLinks.map(el => (
                            <NavLink
                                color='white'
                                key={nanoid()}
                                as={Link}
                                href={el.route}
                            >
                                {el.label}
                            </NavLink>
                        ))}
                    </Flex>
                </GridItem>

                <GridItem colSpan={2}>
                    <Heading variant={'h6'} mb='36px'>
                        Connect with us
                    </Heading>
                    <Flex gap='8px'>
                        {socialMediaLinks.map(el => (
                            <Box
                                key={nanoid()}
                                width='32px'
                                height='32px'
                                border='1px solid white'
                                borderRadius={'50%'}
                                padding='2px'
                                _hover={{
                                    bgColor: 'pryColor',
                                    cursor: 'pointer',
                                }}
                                color='white'
                                display='flex'
                                justifyContent={'center'}
                                alignItems='center'
                            >
                                <Icon
                                    as={el.icon}
                                    color='white'
                                    fontSize={'18px'}
                                />
                            </Box>
                        ))}
                    </Flex>
                    <Text mt='32px' mb='8px'>
                        Subscribe to our newsletter
                    </Text>
                    <InputGroup
                        bgColor={'white'}
                        borderRadius='4px'
                        padding='16px'
                        display={'flex'}
                        alignItems='center'
                    >
                        <Input
                            placeholder='Enter your email'
                            _placeholder={{
                                color: 'darkTextColor',
                            }}
                            outline='none'
                            outlineOffset={'0px'}
                            _focus={{
                                border: 'none',
                                outline: 'none',
                            }}
                            _focusVisible={{
                                border: 'none',
                                outline: 'none',
                            }}
                            border={'none'}
                            bgColor={'white'}
                        />
                        <InputRightElement
                            children={
                                <Button mt='32px' mr='48px'>
                                    Send
                                </Button>
                            }
                        />
                    </InputGroup>
                </GridItem>
            </Grid>
            <Divider border='1px solid white' my='28px' />
            <Text textAlign={'center'} fontSize='16px'>
                Copyright 2023 car rental. All Rights Reserved
            </Text>
        </Box>
    )
}

export default Footer
