const eventHub = document.querySelector(".container")

export const WitnessList = () => {
  eventHub.addEventListener("click", (event) => {
    if (event.target.id === "witnesses") {
      const customEvent = new CustomEvent("displayWitnesses")
      eventHub.dispatchEvent(customEvent)
      console.log("clickededed")
    }
  })
}

const render = (witnessCollection) => {}
