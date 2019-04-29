
const number = [1, 2, 3, 14, 5];

console.log(maximum(number))

function maximum(array) {
    if (array.length === 0) return undefined

    // let max = array[0];

    // for (let i = max; i < array.length; i++)
    //     if (array[i] > max)
    //         max = array[i];
    // return max;

     return array.reduce((a,b) => (a > b) ? a : b);
}