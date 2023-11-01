'use client'
import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Icon,
    Image,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiSolidDoorOpen } from 'react-icons/bi'
import { TbAirConditioning } from 'react-icons/tb'
import { GiGearStickPattern } from 'react-icons/gi'
import { FaUserAlt } from 'react-icons/fa'

interface ICarCard {
    imageUrl: string
    name: string
    price: string
}
const CarCard = ({ imageUrl, name, price }: ICarCard) => {
    return (
        <Box p='8px' borderRadius={'8px'}>
            <Box borderRadius={'8px'} mb='8px' bgColor={'#F3F0EF'}>
                <Image src={''} />
            </Box>
            <Flex>
                <AiFillStar />
                <Text>4.7 (50+ Reviews)</Text>
            </Flex>

            <Grid templateColumns={'repeat(2,1fr)'}>
                <GridItem>
                    <Flex>
                        <Icon as={FaUserAlt} />
                        <Text>4 passengers</Text>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex>
                        <Icon as={BiSolidDoorOpen} />
                        <Text>2 doors</Text>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex>
                        <Icon as={TbAirConditioning} />
                        <Text>Air conditioning</Text>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex>
                        <Icon as={GiGearStickPattern} />
                        <Text>Automatic</Text>
                    </Flex>
                </GridItem>
            </Grid>

            <Flex>
                <Text>$200/day</Text>
                <Button>Rent Now</Button>
            </Flex>
        </Box>
    )
}

export default CarCard
