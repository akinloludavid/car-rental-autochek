'use client'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import DownloadCard from '../Download'

const DownloadCta = () => {
    return (
        <Box px='180px' py='120px'>
            <Flex
                borderRadius={'8px'}
                bgColor='mainBgColor'
                px='80px'
                py='80px'
            >
                <Box>
                    <Text fontSize={'32px'} mb='16px'>
                        Download the free RentalX app
                    </Text>
                    <Text mb='28px' w='60%' fontSize={'18px'}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laborum blanditiis aliquam, debitis illum eius
                        dolorum
                    </Text>
                    <DownloadCard />
                </Box>
                <Box>
                    <Image src='' alt='' />
                </Box>
            </Flex>
        </Box>
    )
}

export default DownloadCta
