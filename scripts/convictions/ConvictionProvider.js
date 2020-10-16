let crimes = []

export const useConvictions = () => {
  return [...crimes]
}

export const getConvictions = () => {
  fetch("https://criminals.glassdale.us/crimes")
    .then((response) => response.json())
    .then((parsedCrimes) => {
      crimes = parsedCrimes
      console.log(crimes)
    })
}
