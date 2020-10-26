import { getConvitions, useConvictions } from "./ConvictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

export const ConvictionSelect = () => {
  return getConvitions().then(() => {
    const convictions = useConvictions()
    render(convictions)
  })
}

const render = (collection) => {
  contentTarget.innerHTML += `
  <h2>Moral Turpitude <h2>
  <select class="dropdown" id="crimeSelect">
  <option value="0">Please Select a Crime...</option>
  ${collection.map((item) => `<option value="${item.id}">${item.name}</option>`)}
</select>
  `
}

eventHub.addEventListener("change", (event) => {
  if (event.target.id === "crimeSelect") {
    const customEvent = new CustomEvent("crimeChosen", {
      detail: {
        crimeThatWasChosen: parseInt(event.target.value),
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})
