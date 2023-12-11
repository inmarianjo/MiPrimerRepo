let numbers: number[] =[1,2,3,4,5];
console.log(numbers);

let listNumbers: Array<number> = [1,2,3,4,5];
console.log(listNumbers);
let i;
for (i= 0; i<listNumbers.length; i++){
    console.log(i);
}

let listNames: Array<string> = ["Federman", "Consuelo", "Karen", "Harold", "Diego", "Wendy"];
for(i=0; i<listNames.length; i++){
    console.log(listNames[i]);
}


let listNotes: Array<number> = [5, 5, 3.2, 2.5, 4];
let suma: number = 0; 
for (i = 0; i<listNotes.length; i++){
    suma = suma + listNotes[i];
    
}
console.log("El promedio de notas es: " + (suma / listNotes.length));


let edades: Array<number> = [14, 80, 13, 26, 5, 22, 34, 19, 18];
let cont: number = 0;
let contMen: number = 0;
for (i = 0; i<edades.length; i++){
    if (edades[i]>=18){
        cont = cont + 1;
    }else if(edades[i]<=17 && edades[i]>=0){
        contMen = contMen + 1;
    }
}
console.log("Las personas mayores de 18 años son: " + (cont));
console.log("Las personas menores de 18 años son: " + (contMen));

let nombres: Array<string> = ["Ana", "Jesús", "Harold", "Ana", "Rosa", "Diego", "Ana"];
let nume: number = 0;
for (i = 0; i<nombres.length; i++){
    if (nombres[i]=="Ana"){
        nume = nume + 1;
    }
}
console.log("En el listado hay " + (nume) + " personas con el nombre Ana");

