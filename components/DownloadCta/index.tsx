import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import DownloadCard from '../Download'

const DownloadCta = () => {
    return (
        <Box>
            <Flex borderRadius={'4px'} bgColor='mainBgColor'>
                <Box>
                    <Text>Download the free RentalX app</Text>
                    <Text>
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
