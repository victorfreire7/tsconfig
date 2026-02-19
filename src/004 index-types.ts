/*
  em um cenario aonde seria necessario o espelhamento de types do index de um type;
  a seguinte propriedade poderia ser utilizada:
*/

type Veiculo = {
  marca: string;
  ano: number;
}

type Car = {
  brand: Veiculo['marca']
  year: Veiculo['ano']
}

const carro: Car = {
  brand: 'Ford',
  year: 2020
}

console.log(carro)
