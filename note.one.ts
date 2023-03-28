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


*/


