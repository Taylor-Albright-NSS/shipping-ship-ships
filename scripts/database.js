import { sortMyStuff } from "./supportFunctions.js"

const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Big John", dockId: 1 },
        { id: 2, name: "Shippin Aint Easy", dockId: 1 },
        { id: 3, name: "The Holy Mackerel", dockId: 1 },
        { id: 4, name: "Mountain Hauler", dockId: 3 },
        { id: 5, name: "Pioneering Spirit", dockId: 3 },
        { id: 6, name: "Boaty McBoatface", dockId: 3 },
        { id: 7, name: "Seawise Giant", dockId: 3 },
    ],
    shippingShips: [
        { id: 1, name: "Esso Atlantic", haulerId: 1 },
        { id: 2, name: "Prairial", haulerId: 2 },
        { id: 3, name: "Palais Royal", haulerId: 2 },
        { id: 4, name: "Rivoli", haulerId: 4 },
        { id: 5, name: "Champs Elysee", haulerId: 4 },
        { id: 6, name: "Ever Ace", haulerId: 4 },
        { id: 7, name: "Nissei Maru", haulerId: 3 },
        { id: 8, name: "MSC Gulsun", haulerId: 1 },
        { id: 9, name: "HMM Rotterdam", haulerId: 2 },
        { id: 10, name: "CMA CGM Trocadero", haulerId: 1 },
    ]
}

export const getDocks = () => {
    let clonedDocks = structuredClone(database.docks)
    let sortedDocks = sortMyStuff(clonedDocks, 'location')
    return sortedDocks
} 
export const getHaulers = () => {
    let clonedHaulers = structuredClone(database.haulers)
    let sortedHaulers = sortMyStuff(clonedHaulers, 'name')
    return sortedHaulers
}
export const getShippingShips = () => {
    let clonedShips = structuredClone(database.shippingShips)
    let sortedShips = sortMyStuff(clonedShips, 'name')
    return sortedShips
}
