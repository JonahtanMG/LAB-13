function combinarCatalogos(tiendaA, tiendaB) {
    let catalogoCombinado = {};
    
    //SE AGREGA TODO DE TIENDA A
    for (let producto in tiendaA) {
        catalogoCombinado[producto] = parseFloat(tiendaA[producto].toFixed(2));
    }
    
    //SE AGREGA TIENDA B Y SE COMPARA LOS PRECIOS
    for (let producto in tiendaB) {
        let precioB = parseFloat(tiendaB[producto].toFixed(2));
        
        if (catalogoCombinado[producto]) {
            //SI AMBOS EXISTEN SE CALCULA EL PRECIO MENOR
            catalogoCombinado[producto] = Math.min(catalogoCombinado[producto], precioB);
        } else {
            //SE AGREGA SI NO EXISTE EN A
            catalogoCombinado[producto] = precioB;
        }
    }
    
    return catalogoCombinado;
}

// Ejemplo de uso:
let tiendaA = {
    laptop: 3500.5,
    mouse: 100.35,
    teclado: 250.9,
};

let tiendaB = {
    mouse: 95.2,
    monitor: 720.457,
    teclado: 260.1,
    silla: 100,
};

console.log(combinarCatalogos(tiendaA, tiendaB));