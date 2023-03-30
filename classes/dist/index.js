class Player {
	score = 0;
	numLives = 10;
	constructor(first, last) {
		console.log('in the constructor');
		this.first = first;
		this.last = last;
	}
	taunt() {
		console.log('I am the best!');
	}
}

const Player1 = new Player('blue', 'steel');
Player1.taunt();
console.log(Player1);
