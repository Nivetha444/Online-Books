
const number = [1, 2, 3, 4];

const output = move(number, 3, -2);

console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.log("Inavlid Offset!");
        return;
    }
    const out = [...array];
    const element = out.splice(index, 1)[0];
    out.splice(position, 0, element);
    return out;

}