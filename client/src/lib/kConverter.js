export const kConverter = (data) => {
    if (data >= 1000) {
        return (data / 1000).toFixed(1) + "K"
    } else {
        return data
    }
}