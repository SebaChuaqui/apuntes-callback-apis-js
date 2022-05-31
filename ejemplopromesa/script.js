const promesa = (text) => {
    return new Promise((resolve, reject) => {
        resolve(text);
    })
}

promesa('TEXTO').then(response => {
    console.log(response);
}).then(response => console.log(response));

