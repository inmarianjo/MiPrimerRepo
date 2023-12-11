// Arrays y objetos en TS
var miArray = ["Harold", "Karen", "Diego", "Wendy"];
console.log(miArray);
//Propiedad Length   Los array son objetos y los objetos tienen propiedades y métodos.
var miArray1 = ["Harold", "Karen", "Diego", "Wendy"];
var cant = miArray.length; // El punto es para acceder a las propiedades en los objetos
console.log(cant);
// Acceder a los elementos de un Array   metodo clase variables tipo objeto ciclos coleecciones en BD EN TS
var miArray2 = ["Harold", "Karen", "Diego", "Wendy"];
var cant2 = miArray2[4];
console.log(cant2);
// Agregar los elementos de un Array al final  metodo clase variables tipo objeto ciclos coleecciones en BD EN TS
var miArray3 = ["Harold", "Karen", "Diego", "Wendy"];
miArray3.push("Jesús");
console.log(miArray3);
// Agregar los elementos de un Array al inicio  metodo clase variables tipo objeto ciclos coleecciones en BD EN TS
var miArray4 = ["Harold", "Karen", "Diego", "Wendy"];
miArray4.unshift("Enito");
console.log(miArray4);
//
var fruits = ["durazno", "uva", "kiwi", "pera"];
fruits.push("banano");
console.log(fruits);
// .map sirve para recorrer los elementos de n arreglo y crea un nuevo arreglo. En este caso usamos con For 
var array4 = [3, 4, 5, 6];
for (var i = 0; i < array4.length; i++) {
    array4[i] = array4[i] * 3;
}
console.log(array4);
// .map sirve para recorrer los elementos de un arreglo y crea un nuevo arreglo. En este caso usamos con For 
// Arreglo de objetos
var users = [
    { firstName: "Harold", lastName: "Aparicio" },
    { firstName: "Angélica", lastName: "Maza" },
    { firstName: "Jesús", lastName: "Ojeda" }
];
var userFullnames = users.map(function (element) {
    return "".concat(element.firstName, " ").concat(element.lastName);
});
console.log(userFullnames);
