
const object_lookup = {
    3: "fizz",
    5: "buzz",
    15: "fizzbuzz"
}

const is_divided_by_from_num =  (num: number, divisor: number) => num % divisor === 0? true: false; 
const sayword_lookup = (record : Record<number, string>) => (number: number) => {console.log(record[number])}

const fizzbuzz_execute  = (list: number[]) => {
    const sayword = sayword_lookup(object_lookup)
    list.forEach((x) => {
        const is_by3 = is_divided_by_from_num(x, 3)
        const is_by5 = is_divided_by_from_num(x, 5)

        is_by3? sayword(3): null
        is_by5? sayword(5): null;
        is_by3 &&  is_by3? sayword(15): null
    })
}

fizzbuzz_execute([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])