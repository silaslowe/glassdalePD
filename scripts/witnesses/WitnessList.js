import { Witness } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "witnesses") {
    const customEvent = new CustomEvent("displayWitnesses", {
      detail: {
        buttonClicked: true,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})

export const WitnessList = () => {
  return getWitnesses().then(() => {
    const witnessArray = useWitnesses()
    render(witnessArray)
  })
}

const render = (witnessCollection) => {
  contentTarget.innerHTML = `
    <h3 class="witnesses--title">Witness Statments</h3>
    <div class="witnessList">
    ${witnessCollection.map((witness) => Witness(witness)).join(" ")}
    </div>
    `
}
