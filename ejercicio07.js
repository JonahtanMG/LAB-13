function contarPalabras(oracion) {
    let palabras = new Map();
    // CONVIERTE A MAYUSCULAS Y DIVIDE EN ESPACIOS
    oracion = oracion.toUpperCase();
    let conjuntoPalabras = oracion.split(" ");
    
    // CUENTA LAS PALABRAS
    for (let palabra of conjuntoPalabras) {
        if (palabras.has(palabra)) {
            palabras.set(palabra, palabras.get(palabra) + 1);
        } else {
            palabras.set(palabra, 1);
        }
    }
    
    return palabras;
}

console.log(contarPalabras("sol luna sol sol estrella luna"));