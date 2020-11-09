export const Note = (noteObj, criminalObj) => {
  const { author, id, date, note } = noteObj
  return `
    
    <p>Date: ${date}</p>
    <p>Officer: ${author}</p>
    <p>Suspect: ${criminalObj.name}</p>
    <p>Notes: ${note}</p>
    <button id="deleteNote--${id}">Delete</button>
    `
}

// <section class="individualNote">
// <h2>Note about}</h2>
// ${note.note}
// <button id="deleteNote--${note.id}">Delete</button>
// </section>
//
