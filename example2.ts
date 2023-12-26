function saludo(nombre: string){
    console.log("Hola " + nombre)

}
saludo("Ingrid")

var quoteStart= "Cada día sabemos más";
var quoteEnd = " y entendemos menos";
console.log (quoteStart + quoteEnd);


function sum(e: number, f: number){
    return e + f
}
console.log(sum(2, 5))

const gente = {
        nombre: 'Diego',
        apellido: 'Aparicio',
        edad: 30,
        correo: 'difranzo@gmail.com'
    }

console.log(gente.nombre)

let texto = 'Hola, ¿Cómo estás?'
console.log(texto.charAt(9))

function despedir(name: string){
    console.log(`Chao, ${name}`)
    
}
despedir(`Ingrid`)

function programar({name, age}: {name: string, age: number}){
    console.log(`Hola ${name}, tienes ${age} años`)
}
programar({name: `Wendy`, age: 25})

const sayHiFromFuction = (fn) => {
    return fn('Miguel')
}