const contentTarget = document.querySelectorAll(".fullPackageTicket")
const eventHub = document.querySelector("#state-fair")
console.log(contentTarget)
export const fullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", (fullPackage) => {
        contentTarget.forEach(target => {
            target.innerHTML += `
            <div class="person bigSpender"> </div>
            `
        })
    })
}