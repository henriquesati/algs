// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.

let input = 9119;

function square(num: number): number{
    let out: Array<number> = [];
    let array: Array<string> = Array.from(num.toString());
    array.map(x =>{
        let num: number = parseInt(x)**2;
        out.push(num)
    })

    return Number(out.join(''));
}
console.log(square(input))
