
try {
    const number = [2, 4, 6, 8, 2, 2, 2];

    console.log(occurance(null, 2));
}
catch (e) {
    console.log(e.message);
}
function occurance(array, search) {
    if (!Array.isArray(array))
        throw new Error('Invalid Array!!')

    return array.reduce((accumulator, current) => {
        const occur = (current === search);
        console.log(accumulator, current, search);
        return accumulator + occur;
    }, 0);

}