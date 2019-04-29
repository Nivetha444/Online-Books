
const num = [1, 2, 3, 4, 5, 6, 7];

const output = except(num, [1,3,6,7]);

console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}