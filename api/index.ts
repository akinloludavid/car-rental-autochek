export const getPopularCars = async () => {
    try {
        const res = await fetch(
            `https://api.staging.myautochek.com/v1/inventory/make?popular=true`,
        )
        const responseData = await res.json()
        return responseData
    } catch (error) {}
}

export const getAllCars = async (pageNumber: number) => {
    try {
        const res = await fetch(
            `https://api.staging.myautochek.com/v1/inventory/car/search?pageNumber=${pageNumber}`,
        )
        const responseData = await res.json()
        return responseData
    } catch (error) {}
}

export const getCarById = async (carId: string) => {
    try {
        const res = await fetch(
            `https://api.staging.myautochek.com/v1/inventory/car/${carId}`,
        )
        const responseData = await res.json()
        return responseData
    } catch (error) {}
}

export const getCarMedia = async (carId: string) => {
    try {
        const res = await fetch(
            `https://api.staging.myautochek.com/v1/inventory/car_media?carId=${carId}`,
        )
        const responseData = await res.json()
        return responseData
    } catch (error) {}
}
