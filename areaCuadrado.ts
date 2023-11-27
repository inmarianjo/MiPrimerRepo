class cuadrados {
    alto: number = 0
    ancho: number = 0

    constructor(x: number, y: number)
    {
        this.alto = x
        this.ancho = y
    }

        area(){
            return this.alto * this.ancho
        }
    
    }

let c = new cuadrados (10,12)
console.log(c.area())