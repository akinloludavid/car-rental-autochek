import { useQuery } from '@tanstack/react-query'
import { getAllCars, getCarById, getCarMedia, getPopularCars } from '.'

export const useGetPopularCars = () => {
    return useQuery({
        queryKey: ['popular-cars'],
        queryFn: getPopularCars,
    })
}

export const useGetAllCars = (pageNumber: number) => {
    return useQuery({
        queryKey: ['all-cars', pageNumber],
        queryFn: () => getAllCars(pageNumber),
    })
}

export const useGetCarDetails = (id: string) => {
    return useQuery({
        queryKey: ['car-details' + id],
        queryFn: () => getCarById(id),
    })
}

export const useGetCarMedia = (id: string) => {
    return useQuery({
        queryKey: ['car-media' + id],
        queryFn: () => getCarMedia(id),
    })
}
