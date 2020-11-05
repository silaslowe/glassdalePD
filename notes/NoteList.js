import { getCriminals, useCriminals } from "../scripts/criminals/CriminalProvider.js"
import { Note } from "./Note.js"
import { getNotes, useNotes } from "./NoteProvider.js"

const contentTarget = document.querySelector(".noteEntryContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", (event) => {
  noteList()
})

export const noteList = () => {
  return getNotes()
    .then(() => getCriminals())
    .then(getCriminals())
    .then(() => {
      const noteArray = useNotes()
      const criminalArray = useCriminals()
      console.log(noteArray, criminalArray)
      render(noteArray, criminalArray)
    })
}

const render = (noteCollection, criminalCollection) => {
  contentTarget.innerHTML = noteCollection.map((note) => {
    const relatedCriminal = criminalCollection.find((criminal) => criminal.id === note.criminalId)
    // console.log("INSIDE MAP", criminal.id, note.criminalId)
    console.log(relatedCriminal)
    return `
    <section class="note">
    <h2>Note about ${relatedCriminal.name}</h2>
    ${note.note}
    `
  })
}
