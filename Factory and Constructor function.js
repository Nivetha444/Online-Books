
/*let address = {
    street:'abc',
    city:'Banglore',
    Zipcode:'638004'
};*/

//Factory Function

function showAddress(street,city,Zipcode){
    return{
        street,
        city,
        Zipcode
    };
}
let address = showAddress('abc','banglore','638001');

console.log(address);

//Constructor Function

function Address(street,city,Zipcode){
    this.street = street
    this.city = city
    this.Zipcode = Zipcode
}
 let newAddress = new Address('xyz','Erode','645001');
 console.log(newAddress);