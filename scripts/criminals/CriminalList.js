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
import { FacilitiesList } from "../facilities/FacilityList.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect

let facilities = []
let crimFac = []
let criminals = []

export const CriminalList = () => {
  return getCriminals()
    .then(getCriminalFacilities)
    .then(getFacilities)
    .then(() => {
      facilities = useFacilities()
      crimFac = useCriminalFacilities()
      criminals = useCriminals()
      // console.log(criminals, facilities, crimFac)
      render(criminals, facilities, crimFac)
    })
}

const render = (allCriminals, allFacilities, allRelationships) => {
  // Each criminal is given a list of facilities they served time at

  contentTarget.innerHTML = allCriminals
    .map((criminalObj) => {
      const facilityRelationshipForThisCriminal = allRelationships.filter(
        (cf) => cf.criminalId === criminalObj.id
      )
      // console.log(facilityRelationshipForThisCriminal)
      const facilitiesArr = facilityRelationshipForThisCriminal.map((cf) => {
        const matchingFacilityObject = allFacilities.find(
          (facility) => facility.id === cf.facilityId
        )
        return matchingFacilityObject
      })
      return Criminal(criminalObj, facilitiesArr)
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
    render(matchingCriminals, facilities, crimFac)
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
    render(criminalsArrested, facilities, crimFac)
  }
})

// Displays the witnesses and their statments

eventHub.addEventListener("displayWitnesses", (event) => {
  WitnessList()
})

eventHub.addEventListener("facilitiesButtonClicked", (event) => {
  FacilitiesList()
})

eventHub.addEventListener("criminalsButtonClicked", (event) => {
  CriminalList()
})

// {
/* <h3 class="criminals--title">Glassdale's Most Wantedest<h3>
  <div class="criminalList"> */
//   </div>
//   <div class="alibis"></div>
// }
