function saludo(nombre) {
    console.log("Hola " + nombre);
}
saludo("Ingrid");
var quoteStart = "Cada día sabemos más";
var quoteEnd = " y entendemos menos";
console.log(quoteStart + quoteEnd);
function sum(e, f) {
    return e + f;
}
console.log(sum(2, 5));
var gente = {
    nombre: 'Diego',
    apellido: 'Aparicio',
    edad: 30,
    correo: 'difranzo@gmail.com'
};
console.log(gente.nombre);
var texto = 'Hola, ¿Cómo estás?';
console.log(texto.charAt(9));
function despedir(name) {
    console.log("Chao, ".concat(name));
}
despedir("Ingrid");
function programar(_a) {
    var name = _a.name, age = _a.age;
    console.log("Hola ".concat(name, ", tienes ").concat(age, " a\u00F1os"));
}
programar({ name: "Wendy", age: 25 });
