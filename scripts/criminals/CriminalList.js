import {getCriminals, useCriminals} from './CriminalProvider.js'
import {Criminal} from './Criminal.js'


export const CriminalList = () => {
  const criminalContent = document.querySelector(".criminalsContainer")
  let criminalHTMLRep = ''
    return getCriminals()
  .then(() => {
    const eachCriminal = useCriminals()
    criminalHTMLRep = eachCriminal.map(criminal => Criminal(criminal))
    criminalContent.innerHTML += `${criminalHTMLRep.join(" ")}`  
  })
}