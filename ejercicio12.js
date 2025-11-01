function gestionarEmpleados(empleados) {
    //UN MAP QUE DEVUELVE UN OBJETO SEGUN CADA AREA
    let mapaAreas = new Map();
    
    for (let empleado of empleados) {
        let area = empleado.area;
        
        if (!mapaAreas.has(area)) {
            //INCIALIZAR
            mapaAreas.set(area, {
                empleados: [],
                promedio: 0,
                totalSalarios: 0,
                cantidad: 0
            });
        }
        
        let datos = mapaAreas.get(area);
        
        //SE AGREGA EMPLEADO
        datos.empleados.push(empleado.nombre);
        
        //SE SUMA EL PROMEDIO
        datos.totalSalarios += empleado.salario;
        datos.cantidad += 1;
        datos.promedio = datos.totalSalarios / datos.cantidad;
    }
    return mapaAreas;
}

const listaEmpleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];

console.log(gestionarEmpleados(listaEmpleados));