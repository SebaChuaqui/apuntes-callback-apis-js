const randomNumber = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}

const responder = alumno => new Promise((resolve, reject) => {
    setTimeout(() => { resolve(alumno) }, randomNumber(500, 700))
})

const pregunta = (alumnos) => {
    Promise.race(alumnos)
        .then(response => console.log('La estrella es para:', response))
}

const Carlos = responder('Carlos')
const Maria = responder('Maria')
const Cristian = responder('Cristian')
const alumnos = [Carlos, Maria, Cristian];
pregunta(alumnos)

