import {getOfficers, useOfficers} from './OfficerProvider.js'
import {OfficerSelect} from './OfficerSelect.js'


const contentTarget = document.querySelector(".officersContainer")
const criminalsContainer = document.querySelector(".criminalsContanier")
const eventHub = document.querySelector(".container")


export const OfficerList = () => {
    return getOfficers()
   .then(() => {
   const arrayOfOfficers = useOfficers()
   render(arrayOfOfficers)
})
}

const render = (collection) => {
  return contentTarget.innerHTML = `
  <h3>Glassdale's Thin Blue Line</h3>
   ${collection.map(officer => `<p>${officer.name}</p>`).join(" ")}
  `
}





