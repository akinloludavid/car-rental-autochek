import { navLinks } from '@/layout/Navbar/data'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    ButtonGroup,
    Icon,
    Flex,
    Link as NavLink,
} from '@chakra-ui/react'
import { v4 as uuid } from 'uuid'
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
                                    key={uuid()}
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
