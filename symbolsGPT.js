// Definindo um objeto com propriedade "itens"
const meuObjetoIteravel = {
    itens: ['item1', 'item2', 'item3'],
    
    // Adicionando um método especial Symbol.iterator que retorna um objeto iterador
    [Symbol.iterator]() {
      // Inicializando o índice com 0
      let indice = 0;
      
      // Retornando um objeto iterador personalizado com um método next()
      return {
        // Definindo o método next() que retorna o próximo elemento na iteração
        next: () => {
          // Se o índice for menor do que o número de itens, retorna o item correspondente
          if (indice < this.itens.length) {
            return { value: this.itens[indice++], done: false };
          } 
          // Caso contrário, retorna done: true para indicar que a iteração está completa
          else {
            return { value: undefined, done: true };
          }
        }
      };
    }
  };
  
  // Iterando sobre o objeto com for...of e imprimindo cada item
  for (const item of meuObjetoIteravel) {
    console.log(item);
  }

  //exemplo 2:

 /*  Para criar um objeto iterável em JavaScript, você pode seguir os seguintes passos:

1- Defina um objeto com um ou mais pares de chave-valor.
2- Adicione um método especial Symbol.iterator ao objeto. Esse método deve retornar um objeto iterador que define o comportamento do objeto durante a iteração.
3- O objeto iterador deve ter um método next() que retorna um objeto com as seguintes propriedades:
    value: o valor do próximo elemento na iteração.
    done: um valor booleano que indica se a iteração está completa.
Aqui está um exemplo simples de como criar um objeto iterável em JavaScript: */

  const meuObjetoIteravel2 = {
    items: ['item1', 'item2', 'item3'],
    [Symbol.iterator]() {
      let indice = 0;
      return {
        next: () => {
          if (indice < this.items.length) {
            return { value: this.items[indice++], done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }
  };
  
  // Iterando sobre o objeto
  for (const item of meuObjetoIteravel2) {
    console.log(item);
  }
  // Saída: "item1", "item2", "item3"
  