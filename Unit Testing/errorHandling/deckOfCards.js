function deckOfCards(arr) {
	function makeCards(face, suit) {
		
		const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
		const suits = ['S', 'H', 'D', 'C'];
		
		if (!faces.includes(face)) {
			throw new Error(`Invalid card face: ${face}`);
		}
		if (!suits.includes(suit)) {
			throw new Error(`Invalid card suit: ${suit}`);
		}
		let cards = {
			face: face,
			suit: suit,
			toString: () => {
				let clubs = {
					S: "\u2660",
					H: "\u2665",
					D: "\u2666",
					C: "\u2663"
				};
				return `${cards.face}${clubs[cards.suit]}`;
			}
		};
		return cards;
	}
	let deck = [];
	
	for (let str of arr) {
		let face = str.substring(0, str.length - 1);
		let suit = str[str.length - 1];
		try {
			deck.push(makeCards(face, suit));
		} catch (err) {
			console.log(`Invalid card: ${str}`);
			return;
		}
	}
	console.log(deck.join(" "))
}

deckOfCards(['AS', '10D', 'KH', '2C']);