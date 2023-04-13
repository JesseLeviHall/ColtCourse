/* 
Colt Course Typescrypt

Interfaces serve almost the same purpose as typea aliases with slightly different syntax. 
Interfaces are used to define the structure of an object and object only. They create reusable, modular types that describe the shapes of objects. You can add to them in separate infterface of same name, and extend them into new interface that inherits parent interface properties, not limited to one interface parent. 

//Describe differences between Types and Interfaces:
 1. Interfaces can be used to describe the structure of an object, while types can be used to describe the structure of a function, primitive, or union.
 2. Interfaces can be re-opened and extended, while types cannot.

 Generally - gravitate towards interface when describing an object type. Otherwise use types. 

The config property of files allows you to specify a list of files that should be included in the compiler. 

The exclude property of files allows you to specify a list of files that should be excluded from the compiler. Default include node_modules but if you specify some, make sure to inclue node_modules also. 

The include property of files allows you to specify a list of files that should be included in the compiler.

The outdir property will specify where the compiled js files go. default is in the same spot as the ts. Normally you will create a dist folder, and have compiled files there. 

typescript generics are:
  1. A way to create reusable components
  2. A way to create a component that can work over a variety of types rather than a single one.
  3. A way to share logic between different components.
  Mainly, create a relationsip between the input and output for a funciton. 

explain type narrowing:
  1. Type narrowing is the process of determining the type of an expression in a program at a particular point in the program.

give an example of type narrowing used in an expression:
  const pizza = {
     name: 'Pepperoni',
     toppings: 20
    };

    function orderStatus(order: any) {
     return `Your order for ${order.name} pizza with ${order.toppings} toppings is ${order.status}`;
    }

    orderStatus(pizza);

    // Type narrowing
    function orderStatus(order: { name: string; toppings: number; status: string }) {
      return `Your order for ${order.name} pizza with ${order.toppings} toppings is ${order.status}`;
    }

    orderStatus(pizza);

    // Type narrowing with interfaces
    interface Pizza {
      name: string;
      toppings: number;
    }

    function orderStatus(order: Pizza) {
      return `Your order for ${order.name} pizza with ${order.toppings} toppings is ${order.status}`;
    }

    orderStatus(pizza);

    
//The instance of returns a boolean. In Typescript it looks like this:
    function isPizza(arg: any): arg is Pizza {
      return arg.name && arg.toppings;
    }

    if (isPizza(pizza)) {
      orderStatus(pizza);
    }

=====================

Type Predicates allows us to write custom functions that narrow the type of a value. 

Type predicates are functions that take a value as an argument and return a type predicate. A prediate takes the form parameterName is Type using as (something).

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

function isDog(animal: Cat | Dog):
animal is Dog {
  return (animal as Dog).bark !== undefined;
}

function makeNoise(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal.meow();
  } else if (isDog(animal)) {
    animal.bark();
  }
}

=====================
Discriminated unions are a common pattern in Typescript creating a literal property that is common accross multiple types. we can then narrow the type using that literal perperty.

ex: 

interface Square {
  kind: 'square';
  sideLength: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Rooster {
  name: 'rooster';
  age: number;
  weight: number;
  kind: 'rooster';
}

interface Cow {
  name: 'cow';
  age: number;
  weight: number;
  kind: 'cow';
}

type FarmAnimal = Rooster | Cow;

function getFarmAnimalSound(animal: FarmAni) {
  switch (animal.kind) {
    case ('rooster'):
      return "cuckoo!"
    case ('cow'):
      return "moo!"
    default:
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
}


const sammy: Rooster = {
  name: 'sammy',
  age: 2,
  weight: 10,
  kind: 'rooster'
}

console.log(getFarmAminalSound(sammy))



*/


