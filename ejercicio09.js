let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,

    detalles: function () {
        return "Auto: "+this.marca+", modelo: "+this.modelo+", del año: "+this.año;
    }
};

//EJECUTAR
console.log(auto.detalles());