"use strict";
const hello = "hello";
console.log(hello);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Product {
    constructor(style, color) {
        this.style = style;
        this.color = color;
    }
    sell() {
        console.log("Sold!");
    }
}
const bike1 = new Bike("red");
const jacket = new Product("top", "green");
console.log(jacket.color);
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
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be positive");
        }
        this._score = newScore;
    }
}
class superPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isSuper = true;
    }
    maxScore() {
        this._score = 999;
    }
}
const playerOne = new Player("Jesus", "Consuelo", 100);
console.log(playerOne.fullName);
console.log(playerOne.score);
playerOne.score = 200;
console.log(playerOne.score);
//an abstract class is a class that is not intended to be instantiated directly, but rather to be inherited from.
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}
class Developer extends Employee {
    constructor(name, salary, mainLanguage) {
        super(name, salary);
        this.mainLanguage = mainLanguage;
    }
    work() {
        console.log(`${this.name} is coding`);
    }
}
const dev = new Developer("Jestine Bobodragon", 120000, "TypeSctipt");
console.log(dev.work());
