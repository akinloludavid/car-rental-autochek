import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const GoBack = () => {
    const router = useRouter()
    return (
        <div>
            <Button
                px='0px'
                w='fit-content'
                variant={'link'}
                leftIcon={<FaArrowLeft />}
                onClick={() => router.back()}
            >
                Go Back
            </Button>
        </div>
    )
}

export default GoBack
