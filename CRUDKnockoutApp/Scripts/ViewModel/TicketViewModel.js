
function TicketsViewModel() {
    this.tickets = [
        { name: "Economy", price: 10 },
        { name: "Business", price: 20 },
        { name: "FirstClass", price: 50 }
    ];
    this.chosenTicket = ko.observable();
    this.resetTicket=function(){this.chosenTicket(null)}

}
ko.applyBindings(new TicketsViewModel());
