
//Instancia rectángulo.
let rec = new Rectangulo(2, 2);
console.log(rec);
console.log(`El área mide: ${rec.calcularArea()}m.`);
console.log(`El perimetro mide: ${rec.calcularPerimetro()}m.`);

//Instancia triángulo.
let tri = new Triangulo(10, 10, 10);
console.log(tri);
console.log(`El área mide: ${tri.calcularArea()}m.`);
console.log(`El perimetro mide: ${tri.calcularPerimetro()}m.`);
