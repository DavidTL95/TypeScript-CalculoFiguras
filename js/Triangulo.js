"use strict";
class Triangulo extends Figura {
    //Constructor.
    constructor(newLado1, newLado2, newLado3) {
        super();
        this.lado1 = newLado1;
        this.lado2 = newLado2;
        this.lado3 = newLado3;
    }
    //Métodos.
    calcularAreaTri() {
        return super.calcularArea(this.lado1, this.lado2) / 2;
    }
    calcularPerimetroTri() {
        return super.calcularPerimetro(this.lado1, this.lado2, this.lado3);
    }
}
