'use client'
import { useGetAllCars, useGetPopularCars } from '@/api/query'
import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import CarCard from './CarCard'
import { FaArrowRight } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { AnimatedView } from '@/components/AnimatedView'
import { PageLoader, TabLoaders } from '@/components/Loader'
const TopRated = () => {
    const router = useRouter()
    const [selectedCarId, setSelectedCarId] = useState('')
    const { data, isLoading: isPopularCarLoading } = useGetPopularCars()
    const { data: allCars, isLoading: isLoadingAllCars } = useGetAllCars(1)
    const popularCars = data?.makeList
    const allCarsData = allCars?.result
    return (
        <Box
            pt='200px'
            pb='120px'
            bgColor='secBgColor'
            px={['24px', '72px', '120px']}
        >
            <Heading
                color='darkTextColor'
                textAlign={'center'}
                variant={'h6'}
                as='h2'
            >
                Best Services
            </Heading>
            <Heading
                mt='20px'
                color='black'
                mx='auto'
                textAlign={'center'}
                w={['100%', '80%', '80%', '60%', '30%']}
                mb='60px'
            >
                Explore our Top Deal From Top Rated Dealers
            </Heading>

            {isPopularCarLoading ? (
                <TabLoaders />
            ) : (
                <Grid
                    templateColumns={[
                        'repeat(2,1fr)',
                        'repeat(3,1fr)',
                        'repeat(4,1fr)',
                        'repeat(6,1fr)',
                    ]}
                    gap={['16px', '8px', '8px']}
                    justifyContent={'center'}
                    mb='48px'
                    px={['0px', '180px']}
                >
                    {popularCars?.slice(0, 5)?.map((car: any) => (
                        <GridItem key={uuid()}>
                            <Button
                                py='8px'
                                gap='8px'
                                h='auto'
                                fontSize='13px'
                                onClick={() => setSelectedCarId(car.id)}
                                variant={
                                    car.id === selectedCarId
                                        ? 'primary'
                                        : 'secondary'
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
                        </GridItem>
                    ))}
                    <GridItem>
                        <Menu>
                            <MenuButton
                                variant={'secondary'}
                                fontWeight='700'
                                py='8px'
                                h='auto'
                                fontSize='13px'
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
                                        key={uuid()}
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
                    </GridItem>
                </Grid>
            )}

            {isLoadingAllCars ? (
                <PageLoader />
            ) : (
                <>
                    <Grid
                        templateColumns={{
                            base: 'repeat(1,1fr)',
                            sm: 'repeat(1,1fr)',
                            md: 'repeat(2,1fr)',
                            lg: 'repeat(3,1fr)',
                            xl: 'repeat(4,1fr)',
                        }}
                        gap='24px'
                    >
                        {allCarsData
                            ?.slice(0, 8)
                            ?.map((car: any, idx: number) => (
                                <AnimatedView key={uuid()} delay={idx * 0.1}>
                                    <GridItem>
                                        <CarCard {...car} />
                                    </GridItem>
                                </AnimatedView>
                            ))}
                    </Grid>
                    <Flex>
                        <Button
                            onClick={() => router.push('/cars')}
                            mt='48px'
                            ml='auto'
                            rightIcon={<FaArrowRight />}
                        >
                            View All Cars
                        </Button>
                    </Flex>
                </>
            )}
        </Box>
    )
}

export default TopRated
