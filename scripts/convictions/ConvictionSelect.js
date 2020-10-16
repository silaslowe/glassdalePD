import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")
export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions().then(() => {
    const convictions = useConvictions()
    render(convictions)
    })
}
const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(convictObject => {
                    const conviction = convictObject.name
                    return `<option value="${conviction.id}">${conviction}</option>`
                })
            }
        </select>
    `
}




// const selectorContent = document.querySelector(".filter__crime")

// export const ConvictionSelect = () => {
//   getConvictions().then(() => {
//     const convictionsArray = useConvictions()
//     render(convictionsArray)
//   })
// }

// const render = (convictionsCollection) => {
//   selectorContent.innerHTML += `
//      <select class="dropdown" id="crimeSelect">
//      <option value="0">Please Select a crime...</option>
//     return ${convictionsCollection.map((convictObj) => {
//       //   const convictName = convictObj.name
//       return `<option value="${convictObj.id}">${convictObj.name}</option>`
//     })}
//      </select>
//     `
// }
