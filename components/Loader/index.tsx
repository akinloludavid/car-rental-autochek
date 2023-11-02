import {
    Grid,
    GridItem,
    Skeleton,
    SkeletonText,
    Spinner,
} from '@chakra-ui/react'
import React from 'react'
import { v4 as uuid } from 'uuid'
export const PageLoader = () => {
    return (
        <Grid
            templateColumns={[
                'repeat(1,1fr)',
                'repeat(2,1fr)',
                'repeat(2,1fr)',
                'repeat(4,1fr)',
            ]}
            gap='24px'
        >
            {new Array(8).fill(0).map(_ => (
                <GridItem key={uuid()}>
                    <Skeleton h='180px' />
                    <SkeletonText noOfLines={4} mb='12' />
                    <Skeleton h='48px' />
                </GridItem>
            ))}
        </Grid>
    )
}

export const TabLoaders = () => {
    return (
        <Grid my='24px' templateColumns={['repeat(6,1fr)']} gap='24px'>
            {new Array(6).fill(0).map(_ => (
                <GridItem key={uuid()}>
                    <Skeleton h='40px' />
                </GridItem>
            ))}
        </Grid>
    )
}

export const SpinnerLoader = () => {
    return <Spinner color='pryColor' size='lg' />
}
