import { getHaulers, getShippingShips } from "./database.js"

const shippingShips = getShippingShips()
document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type === "hauler") {
            let counter = 0
            for (const ship of shippingShips) {
                if (ship.haulerId == clickTarget.dataset.primarykey) {
                    counter++
                    console.log(counter)
                }
            }
            window.alert(`The hauler is carrying ${counter} shipping ships`)
        }
    }
)

const haulers = getHaulers()
export const HaulerList = () => {
    let haulersHTML = "<ul>"
    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
        haulersHTML += `
            <li 
            data-type="hauler"
            data-primaryKey="${hauler.id}"
            >${hauler.name}
            </li>
        `
    }
    haulersHTML += "</ul>"
    return haulersHTML
}