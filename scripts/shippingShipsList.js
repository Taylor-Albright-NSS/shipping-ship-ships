import { getShippingShips, getHaulers } from "./database.js"

const shippingShips = getShippingShips()
const haulers = getHaulers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type === "shippingShip") {
            for (const hauler of haulers) {
                if (hauler.id == clickTarget.dataset.haulerforeignkey) {
                    window.alert(`The ${clickTarget.dataset.name} is being hauled by ${hauler.name}`)
                }
            }
        }
    }
)

export const ShippingShipsList = () => {

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        shippingShipsHTML += `
        <li 
        data-name="${ship.name}"
        data-type="shippingShip"
        data-haulerForeignKey=${ship.haulerId} 
        >${ship.name}
        </li>
        `
    }

    shippingShipsHTML += "</ul>"
    return shippingShipsHTML
}