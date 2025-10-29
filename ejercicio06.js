//DATOS INICIALIZADOS
let productos = new Map([
    ["Sal",1.5],
    ["Azucar",3.5],
    ["Arroz",3.5],
    ["Pan",1]
]);

function sumar(map) {
    let suma = 0;
    map.forEach((value) => {
        suma += value;
    });
    return suma;
}

console.log(...productos);
console.log("El total es: " + sumar(productos));