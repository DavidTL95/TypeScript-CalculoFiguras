"use strict";
class Figura {
    //Atributos.
    //Constructor.
    constructor() {
    }
    //Métodos.
    calcularArea(base, altura) {
        let area = base * altura;
        return area;
    }
    calcularPerimetro(atri1, atri2, atri3) {
        let perimetro = 0;
        if (atri1 && atri2 && atri3) {
            perimetro = atri1 + atri2 + atri3;
        }
        else if (atri1 && atri2) {
            perimetro = Math.pow(atri1, 2) + Math.pow(atri2, 2);
        }
        return perimetro;
    }
}
