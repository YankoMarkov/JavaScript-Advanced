class Player {
	constructor(nickName) {
		this.nickName = nickName;
		this.scores = [];
	}
	
	addScore(num) {
		if (!isNaN(parseFloat(num)) && isFinite(num)) {
			this.scores.push(Number(num));
			this.scores.sort((a, b) => b - a);
		}
		return (this);
	}
	
	get scoreCount() {
		return this.scores.length;
	}
	
	get highestScore() {
		return this.scores[0];
	}
	
	get topFiveScore() {
		return this.scores.slice(0, 5);
	}
	
	toString() {
		return `${this.nickName}: [${this.scores}]`;
	}
}

let p = new Player('Trotro');

p.addScore('Pesho');
expect(p.toString()).to.equal('Trotro: []', 'You should add only valid numbers!');
expect(p.highestScore).to.equal(undefined, 'Invalid high score!');
expect(p.topFiveScore.length).to.equal(0, 'Invalid top five score!');
expect(p.scoreCount).to.equal(0, 'Invalid score count!');

p.addScore('123');
expect(p.toString()).to.equal('Trotro: [123]', 'You should add only valid numbers!');
expect(p.highestScore).to.equal(123, 'Invalid high score!');
expect(p.topFiveScore[0]).to.equal(123, 'Invalid top five score!');
expect(p.scoreCount).to.equal(1, 'Invalid score count!');