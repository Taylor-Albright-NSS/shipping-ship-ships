import { getShippingShips } from "./database.js"


export const ShippingShipsList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        // Convert each dock object to an <li> and append to the docksHTML string
        shippingShipsHTML += `
        <li>Ship Id: ${ship.id}</li>
        <li>Ship Name: ${ship.name}</li>
        <li>Ship Dock Id: ${ship.haulerId}</li>
        `
    }

    shippingShipsHTML += "</ul>"
    return shippingShipsHTML
}