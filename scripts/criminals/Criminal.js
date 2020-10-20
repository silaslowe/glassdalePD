export const Criminal = (criminalObj) => {
    const {name, age} = criminalObj
    const {start, end} = criminalObj.incarceration 
    return `
    <section class="criminal">
    <h2>Name: ${name}</h2>
    <p>Age:  ${age}</p>
    <p>Term Start: ${new Date(start).toLocaleDateString('en-US')}</p>
    <p>Term End: ${new Date(end).toLocaleDateString('en-US')}</p> 
    </section>
    `
}