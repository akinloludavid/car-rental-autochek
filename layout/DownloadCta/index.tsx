'use client'
import DownloadCard from '@/layout/Download'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const DownloadCta = () => {
    return (
        <Box px={['24px', '72px', '180px']} py='120px'>
            <Flex
                borderRadius={'8px'}
                bgColor='mainBgColor'
                px={['24px', '32px', '80px']}
                py='80px'
                flexDir={['column', 'column', 'row']}
            >
                <Box>
                    <Text fontSize={'32px'} lineHeight='32px' mb='16px'>
                        Download the free RentalX app
                    </Text>
                    <Text
                        mb='28px'
                        w={['100%', '100%', '60%']}
                        fontSize={'18px'}
                    >
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
