import HeroSection from '@/layout/HeroSection'
import { render, screen } from '@testing-library/react'

describe('', () => {
    it('renders homepage unchanged', () => {
        render(<HeroSection />)
        const elem = screen.getByText('Fast And Easy Way To Rent')
        expect(elem).toBeInTheDocument()
    })
})
