const { leer, registrar } = require('./operaciones.js')

const argumento = process.argv.slice(2)
const operacion = argumento[0]
const nombre = argumento[1]
const edad = argumento[2]
const animal = argumento[3]
const color = argumento[4]
const enfermedad = argumento[5]

if (operacion === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad)
}
if (operacion === "leer") {
    leer()
}