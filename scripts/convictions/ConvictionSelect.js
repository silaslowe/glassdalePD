import { useConvictions } from "./ConvictionProvider.js"

const selectorContent = document.querySelector(".filter__crime")

export const convictionSelect = () => {
  const convictions = useConvictions()
  render(convictions)
}

const render = (convictionsCollection) => {
  selectorContent.innerHTML += `
     <select class="dropdown" id="crimeSelect">
     <option value="0">Please Select a crime...</option>
     ${convictionsCollection.map((crime) => {
       const crimeName = crime.name
       return `<option>${crimeName}</option>`
     })}
     </select>
    `
}
