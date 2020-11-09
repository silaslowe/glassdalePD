import { getCriminals, useCriminals } from "../scripts/criminals/CriminalProvider.js"
import { saveNote } from "./NoteProvider.js"

const noteFormContainer = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

export const noteForm = () => {
  return getCriminals().then(() => {
    const appStateCriminalSelect = useCriminals()
    // console.log(appStateCriminalSelect)
    render(appStateCriminalSelect)
  })
}

const render = (collection) => {
  return (noteFormContainer.innerHTML = `
        <input class="noteFormInput" id="note__date" type="date">
        <input class="noteFormInput" id="note__author" type="text" placeholder="Your name here">
        <select class="dropdown" id="suspectSelect">
        <option value="0">Please Select A Potential Whodunit</option>
        ${collection
          .map((criminal) => {
            return `<option value="${criminal.id}">${criminal.name}</option>`
          })
          .join(" ")}
       </select>
        <textarea class="noteFormInput" id="note__note" rows="12" placeholder=" Please Enter Notes Here" ></textarea>
        <button id="saveNote">Save Note</button>
    `)
}

eventHub.addEventListener("click", (clickEvent) => {
  getCriminals().then(() => {
    let selectedSuspectArray = useCriminals()

    const author = document.querySelector("#note__author").value
    const criminalId = document.querySelector("#suspectSelect").value
    const date = document.querySelector("#note__date").value
    const note = document.querySelector("#note__note").value

    if (clickEvent.target.id === "saveNote") {
      if (!author || !criminalId || criminalId === "0" || !date || !note) {
        return alert("Please fill in all feilds")
      }
      const newNote = {
        "author": author,
        "criminalId": parseInt(criminalId),
        "date": date,
        "note": note,
      }
      saveNote(newNote)
      noteForm()
    }
  })
})
// export const noteForm = () => {
//   render()
// }
