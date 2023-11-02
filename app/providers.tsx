// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { customTheme } from './stylesConfig/theme'

export function Providers({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnMount: false,
                refetchOnWindowFocus: false,
                retry: false,
            },
        },
    })
    return (
        <CacheProvider>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
            </QueryClientProvider>
        </CacheProvider>
    )
}
