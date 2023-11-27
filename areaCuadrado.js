"use strict";
class cuadrados {
    constructor(x, y) {
        this.alto = 0;
        this.ancho = 0;
        this.alto = x;
        this.ancho = y;
    }
    area() {
        return this.alto * this.ancho;
    }
}
let c = new cuadrados(10, 12);
console.log(c.area());
