"use strict";
//Instancia rectángulo.
let rec = new Rectangulo(2, 2);
console.log(rec);
console.log(`El área mide: ${rec.calcularAreaRec()}m.`);
console.log(`El perimetro mide: ${rec.calcularPerimetroRec()}m.`);
//Instancia triángulo.
let tri = new Triangulo(10, 10, 10);
console.log(tri);
console.log(`El área mide: ${tri.calcularAreaTri()}m.`);
console.log(`El perimetro mide: ${tri.calcularPerimetroTri()}m.`);
