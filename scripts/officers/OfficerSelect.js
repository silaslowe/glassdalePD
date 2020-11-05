import { useOfficers, getOfficers } from "./OfficerProvider.js"

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

export const OfficerSelect = () => {
  return getOfficers().then(() => {
    const appStateOfficerSelect = useOfficers()
    render(appStateOfficerSelect)
  })
}

const render = (collection) => {
  return (contentTarget.innerHTML = `
    <h2>Arresterers</h2>
     <select class="dropdown" id="officerSelect">
     <option value="0">Please Select A Officer</option>
     ${collection
       .map((officer) => {
         return `<option value="${officer.id}">${officer.name}</option>`
       })
       .join(" ")}
     </select>
    `)
}

eventHub.addEventListener("change", (event) => {
  if (event.target.id === "officerSelect") {
    const selectedOfficer = parseInt(event.target.value)
    const customEvent = new CustomEvent("officerChosen", {
      detail: {
        officerThatWasChosen: selectedOfficer,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})
