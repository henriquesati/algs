//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the 
//binary representation of that number. You can guarantee that input is non-negative.

let num = 26;
let acc = 0;
let count = Array.from(num.toString(2)).map( x => {
    if ( x == '1'){
        acc +=1;
    }
    return acc;
})
console.log(acc);