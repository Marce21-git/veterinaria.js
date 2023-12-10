const fs = require('fs')

const leer = () => {
    const data = JSON.parse(fs.readFileSync('./citas.json', { encoding: 'utf8' }))
    console.log(data)
}

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const nuevo_registro = {
        "nombre": nombre,
        "edad": edad,
        "animal": animal,
        "color": color,
        "enfermedad": enfermedad
    }
    const data = JSON.parse(fs.readFileSync('./citas.json', { encoding: 'utf8' }))
    fs.writeFileSync('./citas.json', JSON.stringify([...data, nuevo_registro]), { encoding: 'utf8' })
}

module.exports = { leer, registrar }

