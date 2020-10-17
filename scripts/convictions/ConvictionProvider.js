let convictions = []

export const useConvictions = () => {
    return [...convictions]
}

export const getConvitions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then(parsedConvictions => {
        convictions = parsedConvictions
    })
}