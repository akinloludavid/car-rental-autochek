'use client'
import {
    Box,
    Button,
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

const Footer = () => {
    return (
        <Grid templateColumns={'repeat(7,1fr)'} bgColor='mainBgColor'>
            <GridItem colSpan={2}>
                <Heading>Car Rental</Heading>
                <Text>
                    Anywhere, anytime, we always provide the best service
                </Text>
                <Text>Youremail@.com</Text>
            </GridItem>
            <GridItem colSpan={1}>
                <Heading>Services</Heading>
                <Flex flexDir={'column'}>
                    {servicesLinks.map(el => (
                        <NavLink key={nanoid()} as={Link} href={el.route}>
                            {el.label}
                        </NavLink>
                    ))}
                </Flex>
            </GridItem>

            <GridItem colSpan={1}>
                <Heading>Resources</Heading>
                <Flex flexDir={'column'}>
                    {resourcesLinks.map(el => (
                        <NavLink key={nanoid()} as={Link} href={el.route}>
                            {el.label}
                        </NavLink>
                    ))}
                </Flex>
            </GridItem>
            <GridItem colSpan={1}>
                <Heading>Support</Heading>
                <Flex flexDir={'column'}>
                    {supportLinks.map(el => (
                        <NavLink key={nanoid()} as={Link} href={el.route}>
                            {el.label}
                        </NavLink>
                    ))}
                </Flex>
            </GridItem>

            <GridItem colSpan={2}>
                <Heading>Connect with us</Heading>
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
                <Text>Subscribe to our newsletter</Text>
                <InputGroup bgColor={'white'}>
                    <Input bgColor={'white'} />
                    <InputRightElement children={<Button>Send</Button>} />
                </InputGroup>
            </GridItem>
        </Grid>
    )
}

export default Footer
