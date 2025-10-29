function filtrarYTransformar(arr) {
    //SE REEEMPLAZA POR 0 A LOS ELEMENTOS NEGATIVOS
    arr.forEach((element, i, array) => {
        if(element < 0) array[i] = 0;
    });
    //SE ELEVA AL CUADRADO CADA ELEMENTO
    let suma = 0;
    arr.forEach(element => {
        element = element**2;
        suma += element;
    });
    return suma;
}
//DATOS INICIALIZADOS
let array = [-1,-2,-3,2,3,4];
console.log(filtrarYTransformar(array));