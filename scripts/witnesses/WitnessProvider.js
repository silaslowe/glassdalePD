let witnesses = []

export const useWitnesses = () => [...witnesses]

export const getWitnesses = () => {
  return fetch("https://criminals.glassdale.us/witnesses").then((repsonse) =>
    repsonse.json().then((parsedWitnesses) => {
      witnesses = parsedWitnesses
    })
  )
}
