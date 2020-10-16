let convictions = []

export const useConvictions = () => {
  return convictions.slice()
}

export const getConvictions = () => {
  fetch("https://criminals.glassdale.us/crimes")
    .then((response) => response.json())
    .then((convictionsArray) => {
      console.log(convictionsArray)
      convictions = convictionsArray
    })
}
