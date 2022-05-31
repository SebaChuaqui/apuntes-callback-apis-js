boton.addEventListener('click', () => {
    getData().then(autorizacion => {
        if (autorizacion) {
            return mostrarData();
        };
    }).then(usuario => {
        setTexto(`El usuario en línea es: ${usuario.nombre}`);
    });
});

const getData = () => {
    return new Promise((resolve, reject) => {
        setTexto('Solicitando Autorización');
        setTimeout(() => {
            resolve(true);
        }, 2500);
    });
};

const mostrarData = () => {
    return new Promise((resolve, reject) => {
        setTexto('Esperando la información');
        setTimeout(() => {
            resolve({ nombre: "Juan" });
        }, 2500);
    });
};

const setTexto = datos => {
    contenido.textContent = datos;
};

