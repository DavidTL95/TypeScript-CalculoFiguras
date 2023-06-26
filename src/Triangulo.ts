
class Triangulo extends Figura{
    //Atributos.
    private lado1 : number;
    private lado2 : number;
    private lado3 : number;

    //Constructor.
    constructor(newLado1 : number, newLado2 : number, newLado3 : number){
        super();
        this.lado1 = newLado1;
        this.lado2 = newLado2;
        this.lado3 = newLado3;
    }
    //Métodos.
    calcularArea() : number{
        let area : number = (this.lado1 * this.lado2) / 2;
        return area;
    }

    calcularPerimetro(){
        let perimetro : number = 0;
        perimetro = this.lado1 + this.lado2 + this.lado3;
        return perimetro;
    }
}