//let var const
///const genera una constane
//let y var genera una variable

function suma(){
    const num = 3;
    let num2 = 4;
    var num3 = 5;
    //$scope primero 
    function sumaSegunda(){

        //$Scope segundo
    }
}

function Suma (numero1, numero2){
    return numero1+ numero2;
}

const suma = function (numero1, numero2){
    return numero1+ numero2;
}


///está mal por que y tiene el return
const suma = (numero1, numero2) => {
    return numero1 + numero2
}

const SumaBien = (numero1, numero2) => numero1 + numero2;

const name = "Mich";
const surname = "Estrada"
const lastname = "Hernandez"
const fullname = name + ' ' + surname + ' ' + lastname

const fullname2 = `${name} ${surname} ${lastname}`

const person ={
    name: '',
    surname: '',
    lastname: null
}

(() => {
    const name = person.name.toString();
    const name2 = `${person.name} ${person.lastname ? person.lastname : '' }`;
})()

/// arreglo
const roles = [1,2,3, {name:'', surname: ''}]

// Arraylist
const roles2 = [
    {
        key: 'ADMIN',
        name: 'MichKwon'
    },
    {
        key: 'osmich05',
        name: 'Osmar Estrella'
    }
]

//List
const roles3 = {}
// arrayList  array  list 

roles.forEach(element, index => {
    console.log(element.name);
})

for (let i =0; i <= roles.length; i++){
}

while (condition) {
}

do {
    
} while (condition);

///desestruturación de objetos
const personal = {
    name: 'Mich',
    age: 19,
    address : {
        street: 'barona',
        number: 15
    }
}

console.log(personal.name);
console.log(personal.address.street);
(() => {
    const {name, address:{street}} = personal
})
