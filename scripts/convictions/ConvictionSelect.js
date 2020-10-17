import {getConvitions, useConvictions} from './ConvictionProvider.js'

const selctorContent = document.querySelector(".filters__crime")

export const ConvicitonsList = () => {
return getConvitions().then(() => {
  console.log(selctorContent)
    const convictions = useConvictions()
    render(convictions)
})
}

const render = (collection) => {
  selctorContent.innerHTML += `
  <select class="dropdown" id="crimeSelect">
  <option value="0">Please Select a Crime...</option>
  ${collection.map(item => `<option value="${item.id}">${item.name}</option>`)}
</select>
  `
} 

