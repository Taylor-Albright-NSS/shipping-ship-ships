import { getDocks, getHaulers } from "./database.js"

const docks = getDocks()
const haulers = getHaulers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        console.log(clickTarget)
        if (clickTarget.dataset.type === "dock") {
            let haulerArray = []
            for (const hauler of haulers) {
                if (hauler.dockId == clickTarget.dataset.id) {
                    haulerArray.push(hauler.name)
                }
            }
            if (haulerArray.length > 0) {
                window.alert(`The ${clickTarget.dataset.name} dock is currently unloading ${haulerArray.join(", ")}`)
            } else {
                window.alert(`The ${clickTarget.dataset.name} dock is currently unloading nothing`)
            }
        }
    }
)

export const DockList = () => {

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `
        <li 
        data-id="${dock.id}"
        data-type="dock"
        data-name="${dock.location}"
        >${dock.location} can hold ${dock.volume} tons of cargo
        </li>
        `
    }

    docksHTML += "</ul>"
    return docksHTML
}