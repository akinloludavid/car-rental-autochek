'use client'
import { Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import React from 'react'
import DownloadCard from '../Download'
import { socialMediaLinks } from './data'

const HeroSection = () => {
    return (
        <Flex justify={'space-between'}>
            <Flex flexDir={'column'} gap='18px'>
                {socialMediaLinks.map(el => (
                    <Icon
                        key={nanoid()}
                        border='1px solid white'
                        borderRadius={'50%'}
                        as={el.icon}
                        fontSize='28px'
                        padding='4px'
                        color='white'
                        cursor={'pointer'}
                    />
                ))}
            </Flex>
            <Flex flexDir={'column'} align='center' textAlign={'center'}>
                <Heading>Fast And Easy Way To Rent A Branded Car</Heading>
                <Text>
                    Discover RentalX car rental options in USA with rent a car
                </Text>
                <Text>
                    Select from a range of car options and local specials
                </Text>
                <DownloadCard />
            </Flex>
        </Flex>
    )
}

export default HeroSection
