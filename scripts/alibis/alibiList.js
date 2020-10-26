import { useCriminals } from "../criminals/CriminalProvider.js"
import { Alibi } from "./alibi.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".alibiContainer")

export const AlibiList = () => {
  eventHub.addEventListener("criminalSelected", (event) => {
    const criminalArray = useCriminals()
    const foundCriminal = criminalArray.find((criminal) => {
      return criminal.id === event.detail.criminalId
    })
    const criminalName = foundCriminal.name
    const criminalAlibis = [...foundCriminal.known_associates]
    render(criminalAlibis, criminalName)
  })
}

const render = (alibiCollection, name) => {
  contentTarget.innerHTML = `<h3>${name}</h3>`
  alibiCollection.map((alibi) => {
    return (contentTarget.innerHTML += Alibi(alibi))
  })
}
