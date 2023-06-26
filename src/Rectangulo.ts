
class Rectangulo extends Figura{
    //Atributos.
    private base : number;
    private altura : number;
    //Constructor.
    constructor(newBase : number, newAltura : number){
        super();
        this.base = newBase;
        this.altura = newAltura;
    }
    //Métodos.
    calcularArea() : number{
        let area : number = this.base * this.altura;
        return area;
    }

    calcularPerimetro(){
        let perimetro : number = 0;
        perimetro = Math.pow(this.base, 2) + Math.pow(this.altura , 2);
        return perimetro;
    }
}