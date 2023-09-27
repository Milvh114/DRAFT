function sumNumber(a, ...arr) {
    let total=0;
    for (const item of arr) {
        total+=item
    }
    return total;
}
const result=sumNumber(1,2,3,4,5)
console.log("Total number: " +result )

function sumNumber1(a, ...arr) {
    let total=0;
    for (const item of arr) {
        if(typeof(item) ==="number")
            total+=item
    }
    return total;
}
const numbers = [2,4,"hello",true,5]
console.log("Total number: " + sumNumber1(...numbers))