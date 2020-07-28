// Import and invoke the ticket booth component function

import { TicketBooth } from "./TicketBooth.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { foodTicketHolders } from "./food/FoodTicketHolder.js";
import { gameTicketHolders } from "./games/GameTicketHolder.js";
import { sideshowTicketHolders } from "./sideshows/SideShowsTicketHolders.js";
import { fullPackageTicketHolders } from "./FullPackage/FullPackageTicketHolders.js";

TicketBooth()
RideTicketHolders()
foodTicketHolders()
gameTicketHolders()
sideshowTicketHolders()
fullPackageTicketHolders()