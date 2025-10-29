function tieneRepetidos(arr){
    let repetidos = new Set(arr);
    if(arr.length == repetidos.size) return false;
    return true;
}

let array01 = [12,14,23,23,0];
let array02 = [1,2,3,4,5];

console.log(...array01);
console.log(tieneRepetidos(array01));

console.log(...array02);
console.log(tieneRepetidos(array02));