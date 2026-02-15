/*
  uma maneira de associar dois itens de forma independente.
  associations sao tipo 'tem 1'; diferente das heranças que 'são 1'
  liga 2 objetos sem gerar dependencias entre ambos

  essa estrutura de projeto é chamado de "dependency inversion", (quando
  nao ligamos uma class diretamente a outra, e sim criamos uma abstract class).
  isso é uma pratica de programaço que permite uma melhor escalabilidade, ja que;
  caso alteremos a super-class, suas estençoes tambem serao afetadas.

  visualizaçao do diagrama em docs/'008 associacao.png'
*/

export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if(this._ferramenta === null){
      console.log('Não posso escrever sem ferramenta...');
      return;
    }
    this._ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Victor');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Máquina');

escritor.ferramenta
console.log(escritor.escrever());
console.log('----------------------------');
escritor.ferramenta = caneta;
console.log(escritor.escrever());
console.log('----------------------------');
escritor.ferramenta = maquinaEscrever;
console.log(escritor.escrever());

