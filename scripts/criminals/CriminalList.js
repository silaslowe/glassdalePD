import { Criminal } from "./Criminal.js"
import { useCriminals, getCriminals } from "./CriminalProvider.js"

export const CriminalList = () => {
  let criminalContentHTML = ""
  const criminalContent = document.querySelector(".criminalsContainer")
  getCriminals().then(() => {
    const criminalArray = useCriminals()
    for (const criminal of criminalArray) {
      criminalContentHTML += Criminal(criminal)
    }
    criminalContent.innerHTML += `${criminalContentHTML}`
  })
}
