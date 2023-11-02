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
import React, { useState } from 'react'
import { navLinks } from './data'
import { nanoid } from 'nanoid'
import { AiOutlineMenu } from 'react-icons/ai'
import SideMenu from '@/components/SideMenu'
const Navbar = ({ color = 'white' }: { color?: string }) => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
    return (
        <Flex justify={'space-between'} align='center' pt='24px'>
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

            <Flex
                display={{ base: 'none', xl: 'flex' }}
                align={'center'}
                gap='60px'
            >
                {navLinks.map(link => (
                    <NavLink
                        fontWeight={'500'}
                        as={Link}
                        color={color}
                        key={nanoid()}
                        href={link.route}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </Flex>

            <ButtonGroup
                alignItems={'center'}
                display={{ base: 'none', xl: 'flex' }}
            >
                <Button variant={'secondary'} px='4px' py='4px'>
                    <Icon as={BiSearch} color='black' fontSize={'24px'} />
                </Button>
                <Button>Log in</Button>
            </ButtonGroup>
            <Icon
                as={AiOutlineMenu}
                display={{ md: 'flex', xl: 'none' }}
                fontSize='32px'
                color='white'
                padding='4px'
                w='36px'
                h='36px'
                borderRadius={'4px'}
                bgColor={'pryColor'}
                onClick={() => setIsSideMenuOpen(true)}
            />
            <SideMenu
                isOpen={isSideMenuOpen}
                onClose={() => setIsSideMenuOpen(false)}
            />
        </Flex>
    )
}

export default Navbar
