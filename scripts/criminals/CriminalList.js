import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { Criminal } from "./Criminal.js"
import { WitnessList } from "../witnesses/WitnessList.js"
import {
  getCriminalFacilities,
  useCriminalFacilities,
} from "../facilities/CriminalFacilitiesProvider.js"
import { getFacilities, useFacilities } from "../facilities/FacilitiesProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect

export const CriminalList = () => {
  return getCriminals()
    .then(getCriminalFacilities)
    .then(getFacilities)
    .then(() => {
      const facilities = useFacilities()
      const crimFac = useCriminalFacilities()
      const criminals = useCriminals()

      console.log("All arrayd", facilities, crimFac, criminals)
      render(criminals, facilities, crimFac)
    })
}

const render = (criminalCollection, allFacilities, allRelationships) => {
  contentTarget.innerHTML = criminalCollection
    .map((criminalObj) => {
      const facilityRelationshipForThisCriminal = allRelationships.filter(
        (cf) => cf.criminalId === criminalObj.id
      )
      const facilities = facilityRelationshipForThisCriminal.map((cf) => {
        const matchingFacilityObject = allFacilities.find(
          (facility) => facility.id === cf.facilityId
        )
        return matchingFacilityObject
      })
      return Criminal(criminalObj, facilities)
    })
    .join("")
}

// Chooses the criminals by crime using the dropdown

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

// Choses the criminals by the arresting officer using the dropdown

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

// Displays the witnesses and their statments

eventHub.addEventListener("displayWitnesses", (event) => {
  WitnessList()
})

// {
/* <h3 class="criminals--title">Glassdale's Most Wantedest<h3>
  <div class="criminalList"> */
//   </div>
//   <div class="alibis"></div>
// }
