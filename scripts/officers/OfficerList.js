import {getOfficers, useOfficers} from './OfficerProvider.js'

export const OfficerList = () => {
   const officerContent = document.querySelector(".officersContainer")
   let officerHTMLRep = ''
    return getOfficers()
   .then(() => {
   
      const eachOfficer = useOfficers()
   
      officerHTMLRep = eachOfficer.map(officer => `<p class="officer">${officer.name}</p>`).join(" ")
   officerContent.innerHTML += officerHTMLRep 
})
}