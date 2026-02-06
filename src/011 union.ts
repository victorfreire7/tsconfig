// union types é quando uma estrutura
// pode ter mais de um valor diferente

//// string | number | boolean

function addOrConcat(
  a: number | string,
  b: number | string
){
  if (typeof a === 'number' && typeof b === 'number') return a + b; // soma
  return `${a}${b}`
}

// caso nao haja a validação, o typescript geraria um erro,
// por nao ter certeza do que seja o retorno correto

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
