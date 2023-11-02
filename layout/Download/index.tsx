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
                p='12px'
                gap='8px'
            >
                <Icon as={AiFillApple} fontSize='32px' />
                <Box>
                    <Text
                        fontSize={'12px'}
                        lineHeight='12px'
                        color='black'
                        textAlign={'left'}
                        mb='12px'
                    >
                        Download on the
                    </Text>
                    <Heading
                        variant={'h3'}
                        as='h3'
                        textAlign={'left'}
                        fontSize={'18px'}
                        lineHeight='12px'
                        color='black'
                    >
                        Apple Store
                    </Heading>
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
                gap='8px'
            >
                <Icon as={FaGooglePlay} fontSize='32px' />
                <Box>
                    <Text
                        lineHeight='12px'
                        fontSize={'12px'}
                        color='black'
                        textAlign={'left'}
                        mb='12px'
                    >
                        Get it from
                    </Text>
                    <Heading
                        variant={'h3'}
                        as='h3'
                        fontSize={'18px'}
                        lineHeight='12px'
                        textAlign={'left'}
                        color='black'
                    >
                        Google Play
                    </Heading>
                </Box>
            </Flex>
        )
    }

    return (
        <Flex
            alignItems={'center'}
            gap='16px'
            flexDir={['column', 'column', 'row']}
        >
            <AppleCard />
            <AndroidCard />
        </Flex>
    )
}

export default DownloadCard
