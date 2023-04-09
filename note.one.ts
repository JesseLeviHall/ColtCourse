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

    



*/


