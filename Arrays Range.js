function arrayRange(min, max)
{
const output = [];
for(let i = min; i<=max ;i++)
 output.push(i);
 return output;
}

const numbers = arrayRange(-10,2);

console.log(numbers);
