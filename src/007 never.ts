// Never:
// quando uma funçao nao retorna / Mesma funçao do Void
// geralmente usada pra criação de erros.

export function newErro(): never {
  throw new Error('Random Error');
}

newErro();
