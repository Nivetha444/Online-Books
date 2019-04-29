const person= {
    firstname:'Nivetha',
    lastname:'krishnan',

    get fullname(){
        return `${person.firstname} ${person.lastname}` 
    },

    set fullname(value){
        const parts = value.split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
};

person.fullname = 'Swetha Subha';

console.log(person);