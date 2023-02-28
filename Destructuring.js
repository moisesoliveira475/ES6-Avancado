/* var arr = ['apple', 'banana', 'orange', ['tomato']]

var [apple, banana, orange, [tomato]] = arr

console.log(tomato) */

/* var obj = {
    nome: 'Celso',
    props:
    {
        idade: 37,
        altura: 1.87,
        favoriteColors: ['blue', 'orange', 'black']
    }

}
var { 
    nome: nome2,
    props:
    {
        idade: idade2, altura: altura2,
        favoriteColors: [color1, color2, color3]
    }
} = obj

console.log(idade2, altura2, color1) */

/* var arr = [{nome: 'apple', type:'fruit'}]
var [{nome: fruitName, type: type2}] = arr
console.log(fruitName, type2) */

/* function sum([a, b] = [0, 0]) {
    return a + b;
}
console.log(sum()) */

function sum({a, b}) {
    return a + b;
}
console.log(sum({a:5, b:5}))