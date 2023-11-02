import Footer from '@/layout/Footer'
import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Providers } from './providers'
import { lato } from './stylesConfig/theme'

const grotesk = Space_Grotesk({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metaData: Metadata = {
    title: '',
    description: '',
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            {/* <style jsx global>
                {`
                    :root {
                        --font-grotest: ${grotesk.style.fontFamily};
                    }
                `}
            </style> */}
            <body className={lato.className}>
                <Providers>
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
