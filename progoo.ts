
let is: boolean = true;
if(is){
    console.log("activo")
}

function sumar(a: number, b: number){
    return a+b;
}
const result = sumar(3,5);

//Creando objetos en Typescript --- se necesita una clase. Las clases sirven para hacer moldes de los objects
// Se conforma de un conjunt de funcional. que son métodos y de campos que describen prop. del objects. 
// Object persona, propiedad color de piel, ojos, dedos, etc. y sus funcional son: una persona programa, etc. 

class Accounting {

    private asset: number;
    private liability: number;

    constructor(asset: number, liability: number){
        this.asset = asset;
        this.liability = liability;

    }

    getEquility(): number{
        return this.asset;
    }
}

const persona = {
    name: 'Pepe',
    age: 32
}
persona.name

///function saluda(name: string){
    console.log(`Hola ${name}`)
//}
//saluda('Pepe')

// En las funciones tenemos objetos
function saluda(persona: { nameF:string, age: number }){
    const {nameF, age} = persona
    console.log (`Hola ${nameF}, tienes ${age} años`)
}
saluda({nameF: 'Harold', age: 30})

