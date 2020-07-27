const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", (changeEvent) => { 
    if (changeEvent.target.id === "rideTicket") {
    const rideEvent = new CustomEvent("rideTicketPurchased", {
        // detail: {
        //     event: changeEvent.target.value
        // }
        })
        eventHub.dispatchEvent(rideEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

