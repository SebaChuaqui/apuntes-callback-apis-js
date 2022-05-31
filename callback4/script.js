const getSquare = (number, callback) => callback(number * number);
getSquare(4, result => console.log(result));
getSquare(2, result => console.log(result));
getSquare(5, result => console.log(result));
getSquare(12, result => console.log(result));