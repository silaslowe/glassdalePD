import { saveNote } from "./NoteProvider.js"

const noteFormContainer = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
  return (noteFormContainer.innerHTML = `
        <input id="note__date" type="date">
        <input id="note__author" type="text" placeholder="Your name here">
        <input id="note__suspect" type="text" placeholder="Suspect name here">
        <textarea id="note__note" placeholder="Please Enter Notes Here"></textarea>
        <button id="saveNote">Enter Note</button>
    `)
}

eventHub.addEventListener("click", (clickEvent) => {
  const author = document.querySelector("#note__author").value
  const suspect = document.querySelector("#note__suspect").value
  const date = document.querySelector("#note__date").value
  const note = document.querySelector("#note__note").value

  if (clickEvent.target.id === "saveNote") {
    const newNote = {
      "author": author,
      "suspect": suspect,
      "date": date,
      "note": note,
    }
    console.log(newNote)
    saveNote(newNote)
  }
})

export const noteForm = () => {
  render()
}
