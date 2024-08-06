import { ShippingShipsList } from "./shippingShipsList.js";
import { HaulerList } from "./haulerList.js";
import { DockList } from "./dockList.js";

const container = document.getElementById('container')

const allListsHTML = `
<h1>Shipping Ship Tracker</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Shipping Ships</h2>
        ${ShippingShipsList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Haulers</h2>
        ${HaulerList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Docks</h2>
        ${DockList()}
    </section>
</article>
`

container.innerHTML = allListsHTML