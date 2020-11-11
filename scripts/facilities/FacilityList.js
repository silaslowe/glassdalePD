import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilitiesProvider.js"
import { getFacilities, useFacilities } from "./FacilitiesProvider.js"
import { Facility } from "./Facility.js"

const contentTarget = document.querySelector(".criminalsContainer")

let facilities = []
let crimFac = []
let criminals = []

export const FacilitiesList = () => {
  return getCriminals()
    .then(getCriminalFacilities)
    .then(getFacilities)
    .then(() => {
      facilities = useFacilities()
      crimFac = useCriminalFacilities()
      criminals = useCriminals()

      //   console.log(criminals, facilities, crimFac)
      render(facilities, crimFac, criminals)
    })
}

const render = (allFacilities, allRelationships, allCriminals) => {
  contentTarget.innerHTML = allFacilities
    .map((facilityObj) => {
      const criminalRelationshipForThisFacility = allRelationships.filter(
        (cf) => cf.facilityId === facilityObj.id
      )
      const criminalsArr = criminalRelationshipForThisFacility.map((cf) => {
        const matchingCriminalObj = allCriminals.find((criminal) => criminal.id === cf.criminalId)
        return matchingCriminalObj
      })

      return Facility(facilityObj, criminalsArr)
    })
    .join("")
}
