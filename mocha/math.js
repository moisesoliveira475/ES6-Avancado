class Math {
 sum(a, b, callback) {
    setTimeout(() => {
        callback(a + b)
    }, 2001)
    return a + b;
 }
 multiply(a, b) {
    return a * b;
 }
}
module.exports = Math;