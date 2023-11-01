'use client'
import {
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Icon,
    Link as NavLink,
} from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
import Link from 'next/link'
import React from 'react'
import { navLinks } from './data'
import { nanoid } from 'nanoid'
const Navbar = () => {
    return (
        <Flex justify={'space-between'} pt='24px'>
            <Link href='/'>
                <Heading
                    variant={'h1'}
                    as='h2'
                    letterSpacing={'0px'}
                    fontSize='28px'
                    color='pryColor'
                    cursor={'pointer'}
                >
                    Automobile
                </Heading>
            </Link>

            <Flex align={'center'} gap='60px'>
                {navLinks.map(link => (
                    <NavLink
                        fontWeight={'500'}
                        as={Link}
                        color='white'
                        key={nanoid()}
                        href={link.route}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </Flex>

            <ButtonGroup alignItems={'center'}>
                <Button variant={'secondary'} px='4px' py='4px'>
                    <Icon as={BiSearch} color='black' fontSize={'24px'} />
                </Button>
                <Button>Log in</Button>
            </ButtonGroup>
        </Flex>
    )
}

export default Navbar
