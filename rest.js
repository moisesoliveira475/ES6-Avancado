/* const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

function sum(...rest) {
    return multiply(...rest)
}
console.log(sum(2,2,2)) */

/* function somar(...valores) {
    let resultado = 0;
    for (let i = 0; i < valores.length; i++) {
      resultado += valores[i];
    }
    return resultado;
  }
  
  console.log(somar(1, 2, 3)); // imprime 6
  console.log(somar(4, 5, 6, 7)); // imprime 22 */
  
const str = 'moises santos de oliveira';

function args(string) {
    const letras = string.split(' ').join('').split('');
    console.log(letras)
}

args(str)

