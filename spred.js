const obj = {
    test: 'test',
    subObj: {
        test: 123
    }
}
const obj2 = {...obj, subObj: {...obj.subObj}} //criei um clone do primeiro objeto e desestruturei o subobj para não alterar os atributos do obj original quando mexesse no subobj através do obj2 como no exemplo
console.log(obj2)
obj2.subObj = 'test1'
console.log(obj)
console.log(obj2)
