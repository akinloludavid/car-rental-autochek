'use client'
import { useGetCarDetails, useGetCarMedia } from '@/api/query'
import Navbar from '@/layout/Navbar'
import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Icon,
    Image,
    Skeleton,
    Text,
} from '@chakra-ui/react'
import { BsSpeedometer2 } from 'react-icons/bs'
import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { PiEngine } from 'react-icons/pi'
import NairaSymbol from '@/components/NairaSymbol'
import { numberFormat } from '@/utils/helper'
import { useRouter } from 'next/navigation'
import GoBack from '@/components/GoBack'
import Carousel from '@/components/Carousel'
import { SpinnerLoader } from '@/components/Loader'

const CarDetails = ({ params }: { params: { slug: string } }) => {
    const router = useRouter()
    const { data: carDetails, isLoading: isLoadingCarDetails } =
        useGetCarDetails(params.slug)
    const { data: carMedia, isLoading: isLoadingCarMedia } = useGetCarMedia(
        params.slug,
    )
    const tenure =
        carDetails?.financingSettings?.loanCalculator?.defaultValues?.tenure

    const upfrontPayment =
        carDetails?.financingSettings?.loanCalculator?.defaultValues
            ?.downPayment * carDetails?.marketplacePrice
    carDetails?.financingSettings?.loanCalculator?.defaultValues
    const monthlyRepayment =
        (carDetails?.marketplacePrice - upfrontPayment) / tenure
    const carouselImages = carMedia?.carMediaList?.map((el: any) => el.url)

    if (isLoadingCarDetails) {
        return (
            <Flex w='100vw' h='100vh' align={'center'} justify='center'>
                <SpinnerLoader />
            </Flex>
        )
    }
    return (
        <Box bgColor='secBgColor' minH='100vh' pb='80px'>
            <Flex
                px={['24px', '72px', '120px']}
                flexDir={'column'}
                backgroundColor='#000000'
                background='linear-gradient(45deg, #434343, #181818)'
                height={'500px'}
            >
                <Navbar />

                <GoBack />
                <Flex
                    align={'center'}
                    flexDir={['column', 'column', 'row']}
                    gap='32px'
                    my='48px'
                >
                    <Image
                        src={carDetails?.model?.make?.imageUrl}
                        alt={carDetails?.carName}
                        width='80px'
                        height={'80px'}
                    />
                    <Box>
                        <Heading fontSize={['24px', '32px']} color='white'>
                            {carDetails?.carName}
                        </Heading>
                        <Flex align={'center'} gap='24px' mt='12px'>
                            <Flex align={'center'} gap='12px'>
                                <Icon as={BsSpeedometer2} color='white' />
                                <Text>
                                    {carDetails?.mileage}
                                    {carDetails?.mileageUnit}
                                </Text>
                            </Flex>
                            <Flex align={'center'} gap='12px'>
                                <Icon as={AiOutlineCalendar} color='white' />
                                <Text>{carDetails?.year}</Text>
                            </Flex>
                            <Flex align={'center'} gap='12px'>
                                <Icon as={PiEngine} color='white' />
                                <Text>{carDetails?.engineType}</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>

            <Box
                mt={['-40px', '-80px', '-120px']}
                px={['24px', '72px', '120px']}
            >
                <Grid
                    templateColumns={{
                        sm: 'repeat(1,1fr)',
                        lg: 'repeat(2,1fr)',
                    }}
                    mb='48px'
                >
                    <GridItem
                        borderLeftRadius={[0, 0, 0, '24px']}
                        borderTopRadius={['24px', '24px', '24px', '0']}
                        p={['20px', '40px']}
                        bgColor={'lightPryColor'}
                        maxH='500px'
                    >
                        <Image
                            borderRadius={'24px'}
                            w='100%'
                            src={carDetails?.imageUrl}
                            h='100%'
                        />
                    </GridItem>
                    <GridItem maxH='500px'>
                        <Flex
                            flexDir={'column'}
                            gap='8px'
                            p={['20px', '40px']}
                            bgColor={'white'}
                            borderRightRadius={[0, 0, 0, '24px']}
                            borderBottomRadius={['24px', '24px', '24px', '0']}
                            h='100%'
                            color='black'
                        >
                            <Flex flexDir={'column'}>
                                <Text color='black'>Your upfront payment</Text>
                                <Heading
                                    variant={'h4'}
                                    fontSize={['24px']}
                                    as='h2'
                                    color='black'
                                >
                                    <NairaSymbol />{' '}
                                    {numberFormat(upfrontPayment)}
                                </Heading>
                            </Flex>
                            <Flex flexDir={'column'}>
                                <Text color='black'>Monthly Repayment</Text>
                                <Heading
                                    variant={'h4'}
                                    fontSize={['24px']}
                                    as='h2'
                                    color='black'
                                >
                                    <NairaSymbol />
                                    {numberFormat(monthlyRepayment)}/month
                                </Heading>
                            </Flex>
                            <Flex flexDir={'column'}>
                                <Text color='black'>Tenure</Text>
                                <Heading
                                    fontSize={['24px']}
                                    variant={'h4'}
                                    as='h2'
                                    color='black'
                                >
                                    {tenure} months
                                </Heading>
                            </Flex>

                            <Grid
                                templateColumns={'repeat(2,1fr)'}
                                rowGap='12px'
                            >
                                <GridItem>
                                    <Text color='darkTextColor'>
                                        Interior Color
                                    </Text>
                                    <Text color='black'>
                                        {carDetails?.interiorColor}
                                    </Text>
                                </GridItem>
                                <GridItem>
                                    <Text color='darkTextColor'>
                                        Exterior Color
                                    </Text>
                                    <Text color='black'>
                                        {carDetails?.exteriorColor}
                                    </Text>
                                </GridItem>
                                <GridItem>
                                    <Text color='darkTextColor'>Insurance</Text>
                                    <Text color='black'>
                                        {carDetails?.insured ? 'Yes' : 'No'}
                                    </Text>
                                </GridItem>
                                <GridItem>
                                    <Text color='darkTextColor'>Warranty</Text>
                                    <Text color='black'>
                                        {carDetails?.hasWarranty ? 'Yes' : 'No'}
                                    </Text>
                                </GridItem>
                                <GridItem>
                                    <Text color='darkTextColor'>
                                        Wheel Type
                                    </Text>
                                    <Text color='black'>
                                        {carDetails?.model?.wheelType}
                                    </Text>
                                </GridItem>
                                <GridItem>
                                    <Text color='darkTextColor'>
                                        Transmission
                                    </Text>
                                    <Text
                                        color='black'
                                        textTransform={'capitalize'}
                                    >
                                        {carDetails?.transmission}
                                    </Text>
                                </GridItem>
                            </Grid>
                            <Button
                                mt='12px'
                                onClick={() =>
                                    window.open(
                                        carDetails?.websiteUrl,
                                        '_blank',
                                    )
                                }
                            >
                                Get Started
                            </Button>
                        </Flex>
                    </GridItem>
                </Grid>
                {isLoadingCarMedia ? (
                    <Skeleton h='300px' />
                ) : (
                    <>
                        <Heading
                            color='black'
                            variant={'h2'}
                            fontSize={['24px', '32px']}
                            mb='12px'
                        >
                            Car Images
                        </Heading>
                        <Carousel imageArrays={carouselImages} />
                    </>
                )}
            </Box>
        </Box>
    )
}

export default CarDetails
