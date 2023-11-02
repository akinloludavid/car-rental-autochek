import DownloadCta from '@/layout/DownloadCta'
import BlogSection from '@/layout/BlogsSection'
import HeroSection from '@/layout/HeroSection'
import Navbar from '@/layout/Navbar'
import Testimonials from '@/layout/Testimonials'
import TopRated from '@/layout/TopRated'
import WhyChooseUs from '@/layout/WhyChooseUs'
import { Box, Flex } from '@chakra-ui/react'

export default function Home() {
    return (
        <Box maxW='1440px' mx='auto' overflowX={'clip'}>
            <Flex
                px={['24px', '72px', '120px']}
                flexDir={'column'}
                backgroundColor='#181818'
                background='linear-gradient(45deg, #434343, #181818)'
            >
                <Navbar />
                <HeroSection />
            </Flex>
            <TopRated />
            <WhyChooseUs />
            <Testimonials />
            <DownloadCta />
            <BlogSection />
        </Box>
    )
}
