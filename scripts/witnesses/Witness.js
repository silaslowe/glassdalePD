export const Witness = (witnessObj) => {
  const { name, statements } = witnessObj
  return `
  <div class="witness">
  <p>Name: ${name}</p>
  <p>Statement: ${statements}</p>
  </div>
  `
}
