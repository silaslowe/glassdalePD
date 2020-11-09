import { getCriminals, useCriminals } from "../scripts/criminals/CriminalProvider.js"
import { Note } from "./Note.js"
import { getNotes, useNotes, deleteNote } from "./NoteProvider.js"

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
      render(noteArray, criminalArray)
    })
}

const render = (noteCollection, criminalCollection) => {
  contentTarget.innerHTML = `<section class="Notes"> 
    ${noteCollection.map((note) => {
      const relatedCriminal = criminalCollection.find((criminal) => criminal.id === note.criminalId)
      return `<div class="individualNote">${Note(note, relatedCriminal)}</div>`
    })}
</section>`
}

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("deleteNote--")) {
    const [prefix, id] = clickEvent.target.id.split("--")

    /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
    deleteNote(id).then(() => {
      const updatedNotes = useNotes()
      const criminals = useCriminals()
      render(updatedNotes, criminals)
    })
  }
})
