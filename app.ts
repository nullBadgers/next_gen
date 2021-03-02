const userName = "Stoofer";


// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }
// re-written without func keyword


// const add = (a: number, b: number) => {
//     return a + b;
// };
// func written as an expression


const add = (a: number, b: number = 4) => a + b;
// if you ONLY have one expression
// set a default value for second argument, number = 4
// set defaults from the right parameter

//console.log(add(662,4));

// blank spacer

const printOutput: (a: number | string) => void = output => console.log(output);
// type assignment with a function

const btn = document.querySelector('button');
// 

if (btn) {
    btn.addEventListener('click', event => console.log(event));
}
// event object 
// button is null

printOutput(add(662));
// now can call function with one argument
