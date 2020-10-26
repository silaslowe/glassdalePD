const eventHub = document.querySelector(".container")

export const Criminal = (criminalObj) => {
  const { name, age, id } = criminalObj
  const { start, end } = criminalObj.incarceration
  return `
    <section class="criminal">
    <h2>Name: ${name}</h2>
    <p>Age:  ${age}</p>
    <p>Term Start: ${new Date(start).toLocaleDateString("en-US")}</p>
    <p>Term End: ${new Date(end).toLocaleDateString("en-US")}</p> 
    <button class="alibi--btn" id="associates--${id}">Associate Alibis</button>
    </section>
    `
}

eventHub.addEventListener("click", (event) => {
  if (event.target.id.startsWith("associates")) {
    const [prefix, criminalId] = event.target.id.split("--")

    console.log(criminalId)
    const customEvent = new CustomEvent("criminalSelected", {
      detail: {
        criminalId: parseInt(criminalId),
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})
