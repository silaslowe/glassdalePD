export const Note = (noteObj) => {
  const { author, suspect, date, note } = noteObj
  return `
    <div class="individualNote">
    <p>Date: ${date}</p>
    <p>Officer: ${author}</p>
    <p>Suspect: ${suspect}</p>
    <p>Notes: ${note}</p>
    <button id="deleteNote--${noteObj.id}">Delete</button>
  </div>
    `
}
