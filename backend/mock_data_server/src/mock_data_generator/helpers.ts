export const getRandomInt = (max: number, min = 0): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export const getRandomHash = (): string => {
    return (Math.random() + 1).toString(36).substring(4)
}
export const getRandomArrayElement = <T>(...array: T[]): T => {
    return array[Math.floor(Math.random()*array.length)]
}
export const getRandomCoordinateStuttgart = (): [number, number] => {
    return getRandomArrayElement(...[...Array(getRandomInt(100, 20))].map((): [number, number] => [parseFloat(`48.77${getRandomInt(600)}`), parseFloat(`9.18${getRandomInt(600)}`)]))
}
export const getRandomPseudonym = (): string => {
    return `pseudonym_${getRandomHash()}`
}
