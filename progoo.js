var is = true;
if (is) {
    console.log("activo");
}
function sumar(a, b) {
    return a + b;
}
var result = sumar(3, 5);
//Creando objetos en Typescript --- se necesita una clase. Las clases sirven para hacer moldes de los objects
// Se conforma de un conjunt de funcional. que son métodos y de campos que describen prop. del objects. 
// Object persona, propiedad color de piel, ojos, dedos, etc. y sus funcional son: una persona programa, etc. 
var Accounting = /** @class */ (function () {
    function Accounting(asset, liability) {
        this.asset = asset;
        this.liability = liability;
    }
    Accounting.prototype.getEquility = function () {
        return this.asset;
    };
    return Accounting;
}());
var persona = {
    name: 'Pepe',
    age: 32
};
persona.name;
///function saluda(name: string){
console.log("Hola ".concat(name));
//}
//saluda('Pepe')
// En las funciones tenemos objetos
function saluda(persona) {
    var nameF = persona.nameF, age = persona.age;
    console.log("Hola ".concat(nameF, ", tienes ").concat(age, " a\u00F1os"));
}
saluda({ nameF: 'Harold', age: 30 });
