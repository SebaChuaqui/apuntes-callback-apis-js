const test = () => test();
test();

function tareas(materia, callback){
    console.log(`Iniciando mi tarea de ${materia}.`);
    callback();
}

console.log('Hora de descanso.');
tareas('Matemática', final);

function final(){
    console.log('Finalizando mi tarea');
}
