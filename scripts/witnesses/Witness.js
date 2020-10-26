export const Witness = (witnessObj) => {
  const { name, statements } = witnessObj
  return `
  <div class="witness">
  <p>${name}</p>
  <p>${statements}</p>
  </div>
  `
}
