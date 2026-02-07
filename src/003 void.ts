// void é uma funçao sem retorno.
// usando o rest operator, nós guardamos todos parametros enviados em um array

function noReturn(...args: Array<number>): void {
  console.log(args);
}

noReturn(1, 40, 2);
// nada esta sendo retornado, apenas exibido.


const person2: {nome: string, sobrenome: string, exibirNome(): void} = {
  nome: 'victor',
  sobrenome: 'hugo',

  exibirNome(){ // <-- void
    console.log(this.nome + ' ' + this.sobrenome);
  }
}

person2.exibirNome();

// --------------------------------

