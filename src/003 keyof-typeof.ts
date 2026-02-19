/* CoresObj:
  type CoresObj = {
    vermelho: string;
    verde: string;
    azul: string;
  }
*/

/* CoresChaves:
  type CoresChaves = "vermelho" | "verde" | "azul"
*/

type CoresObj = typeof coresObj; // guardo todos os valores de um objeto ja existente aqui. 'copio'
type CoresChaves = keyof CoresObj; // transforma os valores de uma 'as const' enviado em alias union.

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
}

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
console.log(traduzirCor('azul', coresObj));

// KEYOF DOCUMENTATION:  https://typescript.treinaweb.com.br/docs/handbook/2/keyof-types.html
// TYPEOF DOCUMENTATION:  https://typescript.treinaweb.com.br/docs/handbook/2/typeof-types.html
