function doblarNumeros (arr) {
    let doblados = [];
    arr.forEach(element => doblados.push(element*2));
    return doblados;
}

console.log(doblarNumeros([12,3,9,0]));