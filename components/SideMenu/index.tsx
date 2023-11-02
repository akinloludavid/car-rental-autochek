import { navLinks } from '@/layout/Navbar/data'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    ButtonGroup,
    Icon,
    color,
    Flex,
    Link as NavLink,
} from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import Link from 'next/link'
const SideMenu = ({
    onClose,
    isOpen,
}: {
    isOpen: boolean
    onClose: () => void
}) => {
    return (
        <>
            <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bgColor={'mainBgColor'}>
                    <DrawerCloseButton color='white' />

                    <DrawerBody>
                        <Flex
                            bgColor={'mainBgColor'}
                            flexDir={'column'}
                            align={'flex-start'}
                            gap='24px'
                            mt='48px'
                        >
                            {navLinks.map(link => (
                                <NavLink
                                    fontWeight={'500'}
                                    as={Link}
                                    color={'white'}
                                    key={nanoid()}
                                    href={link.route}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter>
                        <ButtonGroup alignItems={'center'} display='flex'>
                            <Button variant={'secondary'} px='4px' py='4px'>
                                <Icon
                                    as={BiSearch}
                                    color='black'
                                    fontSize={'24px'}
                                />
                            </Button>
                            <Button bgColor={''} w='100%'>
                                Log in
                            </Button>
                        </ButtonGroup>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideMenu
