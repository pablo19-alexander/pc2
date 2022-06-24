//codigo del cuadrado}
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado(45)

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//codigo del triangulo 
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

//codigo del circulo
console.group("Circulos");

//radio

//diametro
function diametroCirculo(radio) {
    return radio * 2;
}
//pi
const PI = Math.PI;
console.log("El pi es: " + PI + "cm");

//circuferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}

//area
function areaCirculo(radio) {
    return (radio * radio) * PI;

}
console.groupEnd();