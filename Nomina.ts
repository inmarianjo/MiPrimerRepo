
function calcularNomina(sueldo:number){

    let auxTransporte: number=140606
    let apSalud: number = (sueldo * 0.04)
    let apPension: number = (sueldo *0.04)
    if (sueldo <=2320000){
        (auxTransporte=140606)
    } else {
        (auxTransporte=0)
        }

    return sueldo + auxTransporte
}

console.log("El sueldo del empleado es de: "+ (calcularNomina(2000000)))

function imprimirNumero(){
    let i = 0
    for (i = 0; i<= 100; i++){
        console.log(i);
    }
}


imprimirNumero()


function imprimirPares(){
    let i = 2  
    for (i = 2; i<=100; i++){
        if (i % 2 == 0){
            console.log(i)
        }
    }
}

imprimirPares()

function imprimirExacto(numero){
    let i = 0
    for (i = 0; i<= numero; i++){
        console.log(i)
    }
}

imprimirExacto(20)

function imprimirImpares(){
    let i: number = 1 
    for (i = 1; i<=100; i++){
        if (i % 2 != 0){
            console.log(i)
        }
    }
}

imprimirImpares()

function multiplosTres(num){
    let i:number = 3
    for (i = 3; i<= num; i++){
        if (i % 3 ==0)
        console.log(i)
    }
}

multiplosTres(60)