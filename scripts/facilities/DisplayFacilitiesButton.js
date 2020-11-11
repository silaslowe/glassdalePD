const facilitiesButtonTarget = document.querySelector(".facilities__button")
const eventHub = document.querySelector(".container")

export const renderFacilitiesButton = () => {
  facilitiesButtonTarget.innerHTML = `<button id="facilities">Facilities</button>`
}

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "facilities") {
    const customEvent = new CustomEvent("facilitiesButtonClicked", {
      detail: {
        buttonClicked: true,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})
