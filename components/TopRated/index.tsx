'use client'
import { useGetPopularCars } from '@/api/query'
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'
const TopRated = () => {
    const [selectedCarId, setSelectedCarId] = useState('')
    const { data } = useGetPopularCars()

    const popularCars = data?.makeList
    return (
        <Box pt='200px' pb='120px' bgColor='secBgColor' px='120px'>
            <Heading
                color='darkTextColor'
                textAlign={'center'}
                variant={'h6'}
                as='h2'
            >
                Best Services
            </Heading>
            <Heading
                color='black'
                mx='auto'
                textAlign={'center'}
                w='30%'
                mb='60px'
            >
                Explore our Top Deal From Top Rated Dealers
            </Heading>

            <Flex gap='16px' justify={'center'}>
                {popularCars?.slice(0, 5)?.map((car: any) => (
                    <Button
                        py='8px'
                        gap='8px'
                        h='auto'
                        key={nanoid()}
                        fontSize='13px'
                        onClick={() => setSelectedCarId(car.id)}
                        variant={
                            car.id === selectedCarId ? 'primary' : 'secondary'
                        }
                    >
                        <Image
                            src={car.imageUrl}
                            alt={car.name}
                            w='16px'
                            h='16px'
                        />
                        {car.name}
                    </Button>
                ))}
                <Menu>
                    <MenuButton
                        variant={'secondary'}
                        fontWeight='700'
                        as={Button}
                    >
                        Explore 10+
                    </MenuButton>
                    <MenuList>
                        {popularCars?.slice(5)?.map((car: any) => (
                            <MenuItem
                                py='8px'
                                gap='8px'
                                h='auto'
                                key={nanoid()}
                                fontSize='13px'
                                onClick={() => setSelectedCarId(car.id)}
                            >
                                <Image
                                    src={car.imageUrl}
                                    alt={car.name}
                                    w='16px'
                                    h='16px'
                                />
                                {car.name}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
                {/* <Button variant='secondary' fontWeight={'700'}>
                    Explore 10+
                </Button> */}
            </Flex>
        </Box>
    )
}

export default TopRated
