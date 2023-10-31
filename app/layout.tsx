import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Providers } from './providers'

const grotesk = Space_Grotesk({ subsets: ['latin'] })

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
            <body className={grotesk.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
