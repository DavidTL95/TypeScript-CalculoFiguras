"use strict";
class Rectangulo extends Figura {
    //Constructor.
    constructor(newBase, newAltura) {
        super();
        this.base = newBase;
        this.altura = newAltura;
    }
    //Métodos.
    calcularAreaRec() {
        return super.calcularArea(this.base, this.altura);
    }
    calcularPerimetroRec() {
        return super.calcularPerimetro(this.base, this.altura);
    }
}
