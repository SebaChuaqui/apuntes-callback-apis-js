const randomNumber = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}

const runner = (time) => {
    setTimeout(() => {
        console.log(`Hola, Soy el timer de ${time}ms`)
    }, time)
}

runner(randomNumber(500, 5000));
runner(randomNumber(500, 5000));
runner(randomNumber(500, 5000));
runner(randomNumber(500, 5000));

