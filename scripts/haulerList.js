import { getHaulers } from "./database.js"


export const HaulerList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
        haulersHTML += `
        <li>${hauler.id}</li>
        <li>${hauler.name}</li>
        <li>${hauler.dockId}</li>
        `
    }

    haulersHTML += "</ul>"
    return haulersHTML
}