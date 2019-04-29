
const number = [1, 3, 6, 10, 9, 8];

console.log(includes(number,9));

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;

}