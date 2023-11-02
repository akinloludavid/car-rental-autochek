'use client'
import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Icon,
    Image,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { AiFillStar, AiOutlineCalendar } from 'react-icons/ai'
import { GiGearStickPattern } from 'react-icons/gi'
import { GrLocation } from 'react-icons/gr'
import { useRouter } from 'next/navigation'
import { MdOutlineSell } from 'react-icons/md'
import NairaSymbol from '@/components/NairaSymbol'

interface ICarCard {
    imageUrl: string
    title: string
    installment: number
    transmission: string
    id: string
    state: string
    year: number
    sold: boolean
}
const CarCard = ({
    imageUrl,
    title,
    installment,
    transmission,
    id,
    state,
    year,
    sold,
}: ICarCard) => {
    const router = useRouter()
    return (
        <Box p='16px' borderRadius={'8px'} bgColor='white'>
            <Box borderRadius={'8px'} mb='8px' bgColor={'#F3F0EF'}>
                <Image
                    src={imageUrl}
                    borderRadius='8px'
                    w='100%'
                    h='180px'
                    objectFit={'cover'}
                />
            </Box>
            <Flex align={'center'} gap='8px'>
                <Icon color='pryColor' as={AiFillStar} />
                <Text fontSize={'12px'}>4.7 (50+ Reviews)</Text>
            </Flex>
            <Heading
                color='black'
                noOfLines={1}
                fontSize={'18px'}
                mb='12px'
                mt='4px'
            >
                {title}
            </Heading>

            <Grid
                templateColumns={'repeat(2,1fr)'}
                rowGap='8px'
                columnGap={'4px'}
            >
                <GridItem>
                    <Flex gap='8px' align='center'>
                        <Icon color='darkTextColor' as={GrLocation} />
                        <Text fontWeight={'600'} fontSize={'12px'}>
                            {state}
                        </Text>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex gap='8px' align='center' justifyContent={'flex-end'}>
                        <Icon color='darkTextColor' as={AiOutlineCalendar} />
                        <Text fontWeight={'600'} fontSize={'12px'}>
                            {year}
                        </Text>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex gap='8px' align='center'>
                        <Icon color='darkTextColor' as={MdOutlineSell} />
                        <Text fontWeight={'600'} fontSize={'12px'}>
                            {sold ? 'N/A' : 'Available'}
                        </Text>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex gap='8px' align='center' justify={'flex-end'}>
                        <Icon color='darkTextColor' as={GiGearStickPattern} />
                        <Text
                            fontWeight={'600'}
                            textTransform={'capitalize'}
                            fontSize={'12px'}
                        >
                            {transmission}
                        </Text>
                    </Flex>
                </GridItem>
            </Grid>

            <Flex align={'center'} justify='space-between' mt='24px'>
                <Text color='black' fontSize={'14px'}>
                    <NairaSymbol /> {installment.toLocaleString()}/month
                </Text>
                <Button
                    h='36px'
                    fontSize={'13px'}
                    px='24px'
                    onClick={() => router.push(`/car/${id}`)}
                >
                    View More
                </Button>
            </Flex>
        </Box>
    )
}

export default CarCard
