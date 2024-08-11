import { ShippingShipsList } from "./shippingShipsList.js";
import { HaulerList } from "./haulerList.js";
import { DockList } from "./dockList.js";

const container = document.getElementById('container')

function displayLists() {
    const allListsHTML = `
    <h1 class='shippingShipTrackerHeading'>Shipping Ship Tracker</h1>
    <section class="allLists">
        <section class="haulers">
            <h2>Haulers</h2>
            ${HaulerList()}
        </section>
        <section class="shippingShips">
            <h2>Shipping Ships</h2>
            ${ShippingShipsList()}
        </section>
        <section class="docks">
            <h2>Docks</h2>
            ${DockList()}
        </section>
    </section>
    
    `
    
    container.innerHTML = allListsHTML
}

displayLists()