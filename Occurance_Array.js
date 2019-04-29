
const number = [2, 4, 6, 8, 2, 2, 2];

console.log(occurance(number, 2));

function occurance(array, search) {
    return array.reduce((accumulator, current) => {
        const occur = (current === search);
        console.log(accumulator, current, search);
        return accumulator + occur;
    }, 0);

}