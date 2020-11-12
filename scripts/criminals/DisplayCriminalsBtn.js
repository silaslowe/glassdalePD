const criminalsButtonTarget = document.querySelector(".criminals__button")
const eventHub = document.querySelector(".container")

export const renderCriminalsButton = () => {
  criminalsButtonTarget.innerHTML = `<button id="criminals">Criminals</button>`
}

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "criminals") {
    const customEvent = new CustomEvent("criminalsButtonClicked", {
      detail: {
        buttonClicked: true,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})
