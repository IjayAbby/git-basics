// scope bindings:var, let, const
console.log('Understanding var')
var name; //variable declaration
name= 'Ijay Abby'; //variable assignment of type 'String'
console.log (name);
//name='Tall Burger';
//console.log (name);
console.log('Understanding let')
let fruit;
fruit='Mango';
console.log(fruit);
fruit='pineapple';
console.log(fruit);
/*Expect an error
let fruit='Pawpaw';
console.log(fruit);
*/

//constant in action
const PI= 3.142;
console.log(PI);
//Error upon reassignment of a const
PI = 12.32;
console.log(PI);