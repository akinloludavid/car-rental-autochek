import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import React from 'react'
import BlogsCard from './BlogsCard'
import { blogData } from './data'
import { nanoid } from 'nanoid'

const BlogSection = () => {
    return (
        <Box
            pt='120px'
            pb='80px'
            px={['24px', '72px', '120px']}
            bgColor='secBgColor'
        >
            <Heading textAlign={'center'} color='black' mb='60px'>
                Read Our Stories
            </Heading>
            <Grid
                templateColumns={[
                    'repeat(1,1fr)',
                    'repeat(1,1fr)',
                    'repeat(2,1fr)',

                    'repeat(3,1fr)',
                ]}
                gap='32px'
            >
                {blogData.map(el => (
                    <GridItem key={nanoid()}>
                        <BlogsCard {...el} />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}

export default BlogSection
