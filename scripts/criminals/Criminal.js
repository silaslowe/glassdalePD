export const Criminal = (criminalObj) => {
  return `
  <section class="criminal__card">
    <h3>Name: ${criminalObj.name}</h3>
    <p>Age: ${criminalObj.age}</p>
    <p>Conviction: ${criminalObj.conviction}</p>
    <p>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString("en-US")}</p>
    <p>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString("en-US")}</p>
    </section>
    `
}
