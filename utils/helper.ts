export const numberFormat = (value: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
    })
        .format(value)
        .substring(3)
