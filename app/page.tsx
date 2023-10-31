import BlogSection from '@/components/BlogsSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import { Flex } from '@chakra-ui/react'

export default function Home() {
    return (
        <main>
            <Flex
                px='72px'
                flexDir={'column'}
                backgroundColor='#000000'
                background='linear-gradient(45deg, #434343, #000000)'
            >
                <Navbar />
                <HeroSection />
            </Flex>
            <WhyChooseUs />
            <Testimonials />
            <BlogSection />
            <Footer />
        </main>
    )
}
