
let address = {
    street:'Abc',
    city: 'Banglore',
    Zipcode: '638004'
};

function showAddress(address){
    for(let key in address)
    console.log(key, address[key]);
}

showAddress(address);