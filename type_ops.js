//Arithmetic operations

//function declaration
function div(a,b){
    return a / b;
}

let dividend = div (7,2);
console.log(dividend);

//Function Expression
let div_exp = function(a,b)
{
return a / b;
} ;
console.log(div_exp);
let dividend_exp = div_exp(7,2);
console.log(dividend_exp);

//Arrow Function
let arrow_func =(a,b) => {
return a % b
}
console.log(arrow_func);
let modulo = arrow_func(7,2);
console.log(modulo);
// one liner with no_parameters
let  no_param = ()=> 'Return value';
console.log(no_param());
//one liner with one parameter
let cube = (x) => x ** 3;
console.log(cube(5));