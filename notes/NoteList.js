import { Note } from "./Note.js"
import { getNotes, useNotes } from "./NoteProvider.js"

const noteEntryContainer = document.querySelector(".noteEntryContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", (event) => {
  noteList()
})

export const noteList = () => {
  return getNotes().then(() => {
    const noteArray = useNotes()
    render(noteArray)
  })
}

const render = (arr) => {
  noteEntryContainer.innerHTML = arr.map((noteEntry) => Note(noteEntry)).join(" ")
}
