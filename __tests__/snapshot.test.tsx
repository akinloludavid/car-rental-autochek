import BlogSection from '@/layout/BlogsSection'
import Footer from '@/layout/Footer'
import HeroSection from '@/layout/HeroSection'
import Testimonials from '@/layout/Testimonials'
import WhyChooseUs from '@/layout/WhyChooseUs'
import { render } from '@testing-library/react'

it('renders herosection unchanged', () => {
    const { container } = render(<HeroSection />)
    expect(container).toMatchSnapshot()
})

it('renders footer unchanged', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
})

it('renders blog section unchanged', () => {
    const { container } = render(<BlogSection />)
    expect(container).toMatchSnapshot()
})

it('renders blog section unchanged', () => {
    const { container } = render(<Testimonials />)
    expect(container).toMatchSnapshot()
})

it('renders why choose us unchanged', () => {
    const { container } = render(<WhyChooseUs />)
    expect(container).toMatchSnapshot()
})
