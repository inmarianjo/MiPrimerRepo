//Tipos básicosLos tipos básicos que maneja Typescript son booleans, number, string, Any y Void.

let isDone:boolean = false;
let height: number = 5;
let names: string = "Karen";
let list: number[] =[1, 2, 3, 4, 5];
let notSure: any = 4;       //Cuando no queremos declarar el tipo o declaramos el tipo de librería de terceros
                            // O se usa en arrays que contiene distintos tipos
function warnUser(): void {         // declara funciones que no devuelven nada
    alert("This is my warning message")
}

//Clases e interfaces
interface Animal{
    name : string;
    makeSound();
}
