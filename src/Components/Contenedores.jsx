let secciones = {};

for (let i = 1; i <= 10; i++) {
    let contenedores = [];
    for (let j = 1; j <= 10; j++) {
        let SKU = j;
        contenedores.push(SKU);
    }
    secciones["sección " + i] = contenedores;
}

console.log(secciones);