let notes = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
  const noteStateChangeEvent = new CustomEvent("noteStateChanged")

  eventHub.dispatchEvent(noteStateChangeEvent)
}

export const useNotes = () => {
  return notes.slice()
}

export const getNotes = () => {
  return fetch("http://localhost:8088/notes")
    .then((response) => response.json())
    .then((parsedNotes) => {
      notes = parsedNotes
    })
}

export const saveNote = (note) => {
  return fetch("http://localhost:8088/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}

export const deleteNote = (noteId) => {
  return fetch(`http://localhost:8088/notes/${noteId}`, {
    method: "DELETE",
  }).then(getNotes)
}
