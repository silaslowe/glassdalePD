import { useCriminals } from "../criminals/CriminalProvider.js"
import { Alibi } from "./alibi.js"

const eventHub = document.querySelector(".container")

export const AlibiList = () => {
  eventHub.addEventListener("criminalSelected", (event) => {
    const criminalArray = useCriminals()
    const foundCriminal = criminalArray.find((criminal) => {
      return criminal.id === event.detail.criminalId
    })
    const criminalAlibis = [...foundCriminal.known_associates]
    render(criminalAlibis, foundCriminal.id)
  })
}

const render = (alibiCollection, id) => {
  const contentTarget = document.querySelector(`.alibiContainer--${id}`)
  if (!contentTarget.innerHTML) {
    alibiCollection.map((alibi) => {
      return (contentTarget.innerHTML = Alibi(alibi))
    })
  } else {
    contentTarget.innerHTML = ""
  }
}
