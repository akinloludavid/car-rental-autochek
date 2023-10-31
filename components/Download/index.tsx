import React from 'react'
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { AiFillApple } from 'react-icons/ai'
import { FaGooglePlay } from 'react-icons/fa'
const DownloadCard = () => {
    const AppleCard = () => {
        return (
            <Flex
                borderRadius={'4px'}
                bgColor='white'
                padding='12px'
                align={'center'}
                justify='center'
            >
                <Icon as={AiFillApple} />
                <Box>
                    <Text>Download on the</Text>
                    <Heading>Apple Store</Heading>
                </Box>
            </Flex>
        )
    }
    const AndroidCard = () => {
        return (
            <Flex
                borderRadius={'4px'}
                bgColor='white'
                padding='12px'
                align={'center'}
                justify='center'
            >
                <Icon as={FaGooglePlay} />
                <Box>
                    <Text>Get it from</Text>
                    <Heading>Google Play</Heading>
                </Box>
            </Flex>
        )
    }

    return (
        <Flex alignItems={'center'} gap='16px'>
            <AppleCard />
            <AndroidCard />
        </Flex>
    )
}

export default DownloadCard
