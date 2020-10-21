import {getCriminals, useCriminals} from './CriminalProvider.js'
import {useConvictions} from '../convictions/ConvictionProvider.js'
import {Criminal} from './Criminal.js'

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect

export const CriminalList = () => {
  return getCriminals()
      .then(() => {
          const appStateCriminals = useCriminals()
          render(appStateCriminals)
      })
}


eventHub.addEventListener("crimeChosen", event => {
  const criminalArray = useCriminals()
  const convictionArray = useConvictions() 

  const convictionThatWasChosen = convictionArray.find((convictionObj) => {
    return convictionObj.id === event.detail.crimeThatWasChosen})
   
    console.log("Convict number ", event.detail.crimeThatWasChosen)
    
  if(event.detail.crimeThatWasChosen !== 0) {
    const matchingCriminals = criminalArray.filter((criminalObj) => criminalObj.conviction === convictionThatWasChosen.name)
    render(matchingCriminals)
  }
})

const render = criminalCollection => {
  contentTarget.innerHTML =  `
  <h3>Glassdale's Most Wantedest<h3>
  <div class="criminalList">
  ${criminalCollection.map(criminal => Criminal(criminal)).join(" ")}
  </div>
  `
}


