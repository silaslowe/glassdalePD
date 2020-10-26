export const Alibi = (alibiObj) => {
  const { name, alibi } = alibiObj
  return `
  <div class="alibi">
     <p>Associate: ${name}</p>
     <p>Alibi: ${alibi}</p>
     </div>
    `
}
