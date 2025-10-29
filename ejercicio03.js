function reordenarPalabras(oracion) {
    let palabras = [];
    //AQUI SE QUITAN LOS ESPACIOS Y SE AGREGA LA PALABRA AL ARRAY
    while(true){
        let ubicacionEspacio = oracion.indexOf(" ");
        //SI YA NO HAY ESPACIOS SIGNIFICA QUE ES LA ULTIMA PALABRA
        if(ubicacionEspacio == -1) {
            palabras.push(oracion);
            break;
        }    
        palabras.push(oracion.substring(0,ubicacionEspacio));
        oracion = oracion.substring(ubicacionEspacio+1,oracion.length);
    }
    //SE USA EL METODO BURBUJA PARA ORDENAR CADA PALABRA
    for(let i = 0; i < palabras.length; i++){
        for(let j = 0; j < palabras.length-1-i; j++){ 
                    if(palabras[j].charAt(0) > palabras[j+1].charAt(0)){ 
                            let guardar = palabras[j];                
                            palabras[j]=palabras[j+1];          
                            palabras[j+1]=guardar;
                     }   
               }
    }
    //SE VUELVE MAYUSCULA CADA PALABRA
    palabras.forEach((element, i, array)=> {
        array[i] = element.toUpperCase();
    });

    return palabras;
}
console.log(reordenarPalabras("hola buenos dias"));