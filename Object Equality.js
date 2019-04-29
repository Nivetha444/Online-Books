
function Address(street,city,Zipcode){
    this.street = street
    this.city = city
    this.Zipcode = Zipcode
}
 let newAddress = new Address('xyz','Erode','645001');
 let oldAddress = new Address('xyz','Erode','645001');
 let address3 = newAddress;
 //console.log(newAddress);
console.log(areequal(newAddress,oldAddress));
console.log(aresame(newAddress,oldAddress));
console.log(aresame(address3,newAddress));

 function areequal(newAddress,oldAddress){
     return newAddress.street === oldAddress.street &&
         newAddress.city === oldAddress.city &&
         newAddress.Zipcode === oldAddress.Zipcode;
 }

 function aresame(newAddress,oldAddress){
     return newAddress === oldAddress;
 }