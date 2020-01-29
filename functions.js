//Function declaration(definition)
/*
 a and b in line 5 are parameters (formal), a and b in
 line 7 are arguments (actual parameters) passed during 
 the call of a function (invocation)

 in line 10 ,console is a JS object on which the system-defined
 method log is called.
 
function add(a,b) //Explicit call by the console object
{
console.log(a+b) 
//a&b are parameters 


}
// calls the add function
add(4,5); //implict call by global object
//4$5 are arguments of add function

//Exponent
function expo(n)
{
    let m=2;
    return m ** n;
    
}
 m=3;// The effect of reassigning m is null outside the function. The value of m remains to be
 // 2 inside the function
//call to exponent function
console.log (expo(5)); 
//call to Exponent function within log call
let expo_return =expo(5);
console.log(expo_return);// Pass as argument the return value of expo to log method 
// Functions can take in arguments during its call and can also be passed as arguments.
//Such functions are reffered to as first class citizens
*/
let m=3;
function expo(n)
{
     m=2;
     console.log('The value of m inside the function is ' + m);
    return m ** n;
}
let expo_return=expo(3);
console.log(expo_return); //Pass as argument the return value of expo to log method
 console.log('The value of m outside the function is '+ m);
 //The effect of reassigning m is null outside the function.The value of m
 //remains to be 2 inside the function
 //call to EXponent function

