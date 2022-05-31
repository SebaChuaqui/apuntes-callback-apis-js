const randomNumber = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(1) }, randomNumber(500, 2000));
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(2) }, randomNumber(500, 2000));
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(3) }, randomNumber(500, 2000));
});
Promise.race([promise1, promise2, promise3]).then(response => {
    console.log(response);
    });
    
