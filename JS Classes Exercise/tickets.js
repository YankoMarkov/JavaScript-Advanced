function solve(arr, str) {
	class Ticket {
		constructor(destination, price, status) {
			this.destination = destination;
			this.price = price;
			this.status = status;
		}
	}
	let tickets = [];
	
	for (let obj of arr) {
		let ticket = obj.split("|");
		let destination = ticket[0];
		let price = Number(ticket[1]);
		let status = ticket[2];
		tickets.push(new Ticket(destination, price, status));
	}
	switch (str) {
		case "destination":
			tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
			break;
		case "price":
			tickets = tickets.sort((a, b) => a.price - b.price);
			break;
		case "status":
			tickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
			break;
	}
	return tickets;
}

console.log(solve(['Philadelphia|94.20|available',
		'New York City|95.99|available',
		'New York City|95.99|sold',
		'Boston|126.20|departed'],
	'destination'
));


