const hello: string = "hello"

console.log(hello)

interface Colorful {
  color: string;
}

interface ForSale {
  sell(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Product implements Colorful, ForSale {
  constructor(public style: string, public color: string) {}
  sell(): void {
    console.log("Sold!");
  }
}


const bike1 = new Bike("red");
const jacket = new Product("top", "green")
console.log(jacket.color)




/* class Player {
  public readonly first: string;
  public readonly  last: string;
  fullName: string;
  private score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    this.fullName = `${first} ${last}`;
  }

}
 */

class Player {
  constructor(public readonly first: string, public readonly last: string, protected _score: number) {}
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this._score;
  }
  set score(newScore: number) {
    if(newScore < 0){
      throw new Error("Score must be positive");
    }
    this._score = newScore;
  }
}

class superPlayer extends Player{
  public isSuper: boolean = true;
  maxScore(){
    this._score = 999;
  }
}

const playerOne = new Player("Jesus", "Consuelo", 100);
console.log(playerOne.fullName);
console.log(playerOne.score);
playerOne.score = 200;
console.log(playerOne.score);


//an abstract class is a class that is not intended to be instantiated directly, but rather to be inherited from. the difference between abract and interface classes is that abstract classes can have both abstract and concrete methods, while interfaces can only have abstract methods. abstract classes can have both abstract and concrete properties, while interfaces can only have abstract properties.
abstract class Employee {
  constructor(public name: string, public salary: number) {}
  abstract work(): void;
}

class Developer extends Employee { 
  constructor(name: string, salary: number, public mainLanguage: string) {
    super(name, salary);
  }
  work() {
    console.log(`${this.name} is coding`);
  }

}

const dev = new Developer("Jestine Bobodragon", 120000, "TypeSctipt")
console.log(dev.work());