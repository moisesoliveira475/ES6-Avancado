/*
As arrow functions têm algumas diferenças importantes em relação às funções regulares. Por exemplo, elas não possuem seu próprio valor "this" e herdam o valor "this" do contexto em que foram criadas. Além disso, elas são sempre funções anônimas e não podem ser usadas como construtores.
 */
const soma = (a, b) => {
    return a + b;
  };
