const eventHub = document.querySelector(".container")

export const Criminal = (criminalObj, facilities) => {
  const { name, age, id, conviction, arrestingOfficer } = criminalObj
  const { start, end } = criminalObj.incarceration
  return `
    <div class="criminal">
    <h2>Name: ${name}</h2>
    <p>Convicted for ${conviction}</p>
    <p>Arrested by ${arrestingOfficer}</p>
    <p>Age:  ${age}</p>
    <p>Term Start: ${new Date(start).toLocaleDateString("en-US")}</p>
    <p>Term End: ${new Date(end).toLocaleDateString("en-US")}</p> 
    <button class="alibi--btn" id="associates--${id}">Associate Alibis</button>
    <div>
                <h2>Facilities</h2>
                <ul>
                    ${facilities.map((f) => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
        </div>
    </div>
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
