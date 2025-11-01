function contarLetras(texto) {
    let resultado = {};
    //SE CONVIERTE A MINISCULA PARA EVITAR ERRORES
    texto = texto.toLowerCase();
    
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        //SI LO TIENE LE SUMA 1
        if (resultado[letra]) {
            resultado[letra] += 1;
        } else { //SI NO LO TIENE LO AGREGA 
            resultado[letra] = 1;
        }
    }
    
    return resultado;
}

console.log(contarLetras("banana"));