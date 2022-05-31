const principal = (number) => {
    const double = number * 2
    multiply(double, square => {
        calculate25Percent(square, percent => {
            console.log(percent)
        })
    })
}
const multiply = (number, callback) => callback(number * number);
const calculate25Percent = (number, callback) => callback(number * 25 /
    100);
principal(5);
