'use client'
import { Box, Flex, Heading, Icon, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { v4 as uuid } from 'uuid'
import DownloadCard from '../Download'
import { socialMediaLinks } from './data'

const HeroSection = () => {
    return (
        <Box position={'relative'} pb='300px'>
            <Flex justify={'space-between'} pt='72px'>
                <Flex
                    flexDir={'column'}
                    gap='18px'
                    pl='24px'
                    display={{
                        base: 'none',
                        xl: 'flex',
                    }}
                >
                    {socialMediaLinks.map(el => (
                        <Icon
                            key={uuid()}
                            border='1px solid white'
                            borderRadius={'50%'}
                            w='36px'
                            h='36px'
                            _hover={{
                                bgColor: 'pryColor',
                            }}
                            as={el.icon}
                            fontSize='28px'
                            padding='4px'
                            color='white'
                            cursor={'pointer'}
                        />
                    ))}
                </Flex>
                <Flex
                    flexDir={'column'}
                    align='center'
                    textAlign={'center'}
                    w={['100%', '100%', '100%', '100%', '70%']}
                >
                    <Heading
                        variant={'h1'}
                        fontSize={['32px', '48px', '56px']}
                        color='white'
                        lineHeight={['48px', '48px', '84px']}
                        mb='40px'
                    >
                        Fast And Easy Way To Rent{' '}
                        <Heading
                            as='span'
                            color='pryColor'
                            fontSize={['32px', '48px', '56px']}
                            lineHeight={['48px', '48px', '84px']}
                            fontWeight='700'
                        >
                            A Branded Car
                        </Heading>
                    </Heading>
                    <Text fontSize={'18px'} mb='4px'>
                        Discover RentalX car rental options in USA with rent a
                        car
                    </Text>
                    <Text fontSize={'18px'} mb='36px'>
                        Select from a range of car options and local specials
                    </Text>
                    <DownloadCard />
                </Flex>
            </Flex>
            <Flex
                align='center'
                display={{
                    base: 'none',
                    xl: 'flex',
                }}
                w='100%'
                justify={['space-between']}
                flexDir={['column', 'column', 'row']}
                position={['absolute']}
                top='300px'
                left='-180px'
            >
                <Box mt='60px'>
                    <Image src='/images/hero-img.png' alt='car for rent' />
                </Box>
                <Flex
                    align='center'
                    gap={'32px'}
                    flexDir={['column', 'column', 'row']}
                    flexWrap='wrap'
                >
                    <Box
                        border={'2px solid white'}
                        borderRight='2px solid #EB5A3D'
                        borderRadius='50%'
                        display={'flex'}
                        alignItems='center'
                        justifyContent={'center'}
                        flexDir='column'
                        w='140px'
                        h='140px'
                    >
                        <Text
                            fontStyle={'italic'}
                            fontWeight='600'
                            fontSize={'24px'}
                        >
                            222
                        </Text>
                        <Text fontSize='12px'>KM/H</Text>
                        <Text fontSize={'14px'} mt='2'>
                            TOP SPEED
                        </Text>
                    </Box>
                    <Box
                        border={'2px solid #EB5A3D'}
                        borderBottom='2px solid white'
                        borderLeft='2px solid white'
                        borderRadius='50%'
                        display={'flex'}
                        alignItems='center'
                        justifyContent={'center'}
                        flexDir='column'
                        w='140px'
                        h='140px'
                    >
                        <Text
                            fontStyle={'italic'}
                            fontWeight='600'
                            fontSize={'24px'}
                        >
                            92
                        </Text>
                        <Text fontSize='12px'>C</Text>
                        <Text fontSize={'14px'} mt='2'>
                            ENGINE TEMP
                        </Text>
                    </Box>
                    <Box
                        border={'2px solid white'}
                        borderBottom='2px solid #EB5A3D'
                        borderRight='2px solid #EB5A3D'
                        borderRadius='50%'
                        display={'flex'}
                        alignItems='center'
                        justifyContent={'center'}
                        flexDir='column'
                        w='140px'
                        h='140px'
                    >
                        <Text
                            fontStyle={'italic'}
                            fontWeight='600'
                            fontSize={'24px'}
                        >
                            65
                        </Text>
                        <Text fontSize='12px'>HP</Text>
                        <Text fontSize={'14px'} mt='2'>
                            POWER CAR
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default HeroSection
