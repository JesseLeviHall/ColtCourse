class Player {
	#score = 0;
	numLives = 10;
	constructor(first, last) {
		console.log('in the constructor');
		this.first = first;
		this.last = last;
	}
	getScore() {
		return this.#score;
	}
	updateScore() {
		this.#score++;
	}
	taunt() {
		console.log('I am the best!');
	}
	loseLife() {
		this.numLives--;
	}
}

const Player1 = new Player('blue', 'steel');
Player1.taunt();
console.log(Player1.numLives);
Player1.loseLife();
console.log(Player1.numLives);
console.log(Player1.getScore());
Player1.updateScore();
console.log(Player1.getScore());
