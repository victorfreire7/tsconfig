/*
Abstract é uma utilizade poo que torna obrigatorio a utilização de um método ou atributo dentro de uma
sub-classe; quando usado em uma super-class, faz com que a class tenha como objetivo apenas se extender.

- Super-Classes abstratas nao podem ser instanciadas diretamente
- Super-Classes abstratas são feitas para herdar; nao sendo permitida o uso fora desse contexto
- Métodos abstratos nao podem possuir corp/escopo na super-class

*/

export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number
  ){}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida.`)
  }

  abstract bordao(): void
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log('BORDAO GUERREIRA');
  }
}

export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log('BORDAO MONSTRO');
  }
}

const guerreira = new Guerreira('Guerreira', 80, 1200);
const montro = new Monstro('Monstro', 80, 1200);

montro.atacar(guerreira)
