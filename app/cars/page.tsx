'use client'
import { useGetAllCars } from '@/api/query'
import { AnimatedView } from '@/components/AnimatedView'
import GoBack from '@/components/GoBack'
import { PageLoader } from '@/components/Loader'
import Navbar from '@/layout/Navbar'
import Pagination from '@/components/Pagination'
import CarCard from '@/layout/TopRated/CarCard'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import { v4 as uuid } from 'uuid'
import React, { useState } from 'react'

const Cars = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const { data: allCars, isLoading: isLoadingAllCars } = useGetAllCars(
        pageNumber + 1,
    )
    const pageCount = Math.ceil(
        allCars?.pagination?.total / allCars?.pagination?.pageSize,
    )
    const allCarsData = allCars?.result

    return (
        <Box px={['24px', '72px', '120px']} pb='80px' bgColor='secBgColor'>
            <Navbar color='black' />
            <Flex
                align='center'
                flexDir={['column', 'row']}
                justify={'space-between'}
                mt={['24px']}
            >
                <GoBack />
                <Pagination
                    pageCount={pageCount}
                    handlePageClick={e => {
                        setPageNumber(e.selected)
                    }}
                />
            </Flex>
            {isLoadingAllCars ? (
                <Box mt='48px'>
                    <PageLoader />
                </Box>
            ) : (
                <>
                    <Grid
                        mt='40px'
                        templateColumns={{
                            base: 'repeat(1,1fr)',
                            sm: 'repeat(1,1fr)',
                            md: 'repeat(2,1fr)',
                            lg: 'repeat(3,1fr)',
                            xl: 'repeat(4,1fr)',
                        }}
                        gap='24px'
                    >
                        {allCarsData?.map((car: any, idx: number) => (
                            <AnimatedView key={uuid()} delay={idx * 0.1}>
                                <GridItem>
                                    <CarCard {...car} />
                                </GridItem>
                            </AnimatedView>
                        ))}
                    </Grid>
                </>
            )}
        </Box>
    )
}

export default Cars
