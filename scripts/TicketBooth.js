const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", (rideClick) => { 
    if (rideClick.target.id === "rideTicket") {
    const rideEvent = new CustomEvent("rideTicketPurchased", {
        // detail: {
        //     event: changeEvent.target.value
        // }
        })
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click", (foodClick) => { 
    if (foodClick.target.id === "foodTicket") {
    const foodEvent = new CustomEvent("foodTicketPurchased", {
        // detail: {
        //     event: changeEvent.target.value
        // }
        })
        eventHub.dispatchEvent(foodEvent)
    }
})

eventHub.addEventListener("click", (gameClick) => { 
    if (gameClick.target.id === "gameTicket") {
    const gameEvent = new CustomEvent("gameTicketPurchased", {
        // detail: {
        //     event: changeEvent.target.value
        // }
        })
        eventHub.dispatchEvent(gameEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button> 
            <button id="gameTicket">Game Ticket</button>
        </div>
    `
}

