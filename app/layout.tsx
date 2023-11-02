import Footer from '@/layout/Footer'
import type { Metadata } from 'next'
import { Providers } from './providers'

export const metaData: Metadata = {
    title: 'Car rental',
    description: 'Car rental that suits all your needs',
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
