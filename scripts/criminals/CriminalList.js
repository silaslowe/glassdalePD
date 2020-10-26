import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { Criminal } from "./Criminal.js"
import { WitnessList } from "../witnesses/WitnessList.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect

export const CriminalList = () => {
  return getCriminals().then(() => {
    const appStateCriminals = useCriminals()
    render(appStateCriminals)
  })
}

const render = (criminalCollection) => {
  contentTarget.innerHTML = `
  <h3 class="criminals--title">Glassdale's Most Wantedest<h3>
  <div class="criminalList">
  ${criminalCollection.map((criminal) => Criminal(criminal)).join(" ")}
  </div>
  <div class="alibis"></div>
  `
}

eventHub.addEventListener("crimeChosen", (event) => {
  const criminalArray = useCriminals()
  const convictionArray = useConvictions()

  const convictionThatWasChosen = convictionArray.find((convictionObj) => {
    return convictionObj.id === event.detail.crimeThatWasChosen
  })

  if (event.detail.crimeThatWasChosen !== 0) {
    const matchingCriminals = criminalArray.filter(
      (criminalObj) => criminalObj.conviction === convictionThatWasChosen.name
    )
    render(matchingCriminals)
  }
})

eventHub.addEventListener("officerChosen", (event) => {
  const officerId = parseInt(event.detail.officerThatWasChosen)
  const officerArray = useOfficers()
  const criminalArray = useCriminals()
  const officerName = officerArray.find((officer) => {
    return officer.id === officerId
  })

  if (officerName) {
    const criminalsArrested = criminalArray.filter(
      (criminalObj) => criminalObj.arrestingOfficer === officerName.name
    )
    render(criminalsArrested)
  }
})

eventHub.addEventListener("displayWitnesses", (event) => {
  WitnessList()
})
