export const Criminal = (criminalObj) => {
    return `
    <section class="criminal">
    <h2>Name: ${criminalObj.name}</h2>
    <p>Age:  ${criminalObj.age}</p>
    <p>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p> 
    </section>
    `
}