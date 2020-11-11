export const Facility = (facilityObj, criminalsArr) => {
  const { facilityName, securityLevel, capacity, id } = facilityObj

  return `
<div class="criminal">
<h2>Facility: ${facilityName}</h2>
<p>Security Level: ${securityLevel}</p>
<p>Capacity ${capacity}</p>
<h2>Criminals</h2> 
<ul class="crimInFac">
  ${criminalsArr
    .map((criminal) => {
      return `
      <li>${criminal.name}</li>
      `
    })
    .join("")}
  </ul>
</div>
`
}
