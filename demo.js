// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
    let result = [];
    for (let i = start; i <= stop; i++) {
        result.push(i);
    }
    return result;
}

console.log(range(1, 5));