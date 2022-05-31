function getName(callback) {
    callback('John Doe');
}

function callback(name) {
    console.log(name);
}

getName(callback);
