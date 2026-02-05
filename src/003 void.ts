// void é uma funçao sem retorno.
// usando o rest operator, nós guardamos todos parametros enviados em um array

function noReturn(...args: Array<number>): void {
  console.log(args);
}

noReturn(1, 40, 2);
// nada esta sendo retornado, apenas exibido.


const person: {nome: string, sobrenome: string, exibirNome(): void} = {
  nome: 'victor',
  sobrenome: 'hugo',

  exibirNome(){
    console.log(this.nome + ' ' + this.sobrenome);
  }
}

person.exibirNome();

// --------------------------------

export { person }
// o typescript funciona como escopo global das variaveis.
// caso eu nao expxorte esse objeto, ela vai conflitar com o arquivvo '001 types.ts' que possui um objeto com o memso nome.
