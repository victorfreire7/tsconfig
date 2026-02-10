export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number,
    protected readonly cpf: string,
  ) {}

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
};

export class Aluno extends Pessoa {
  public getNomeCompleto(): string {
    return `Polimorfismo no Aluno = ) ${this.nome} ${this.sobrenome}`;
  }
};

export class Cliente extends Pessoa {
  public getNomeCompleto(): string {
    return `Polimorfismo no Cliente = ) ${this.nome} ${this.sobrenome}`;
  }
};

const pessoa = new Pessoa('Victor', 'Hugo', 17, '000.000.000-00');
const aluno = new Aluno('Victor', 'Hugo', 17, '000.000.000-00');
const cliente = new Cliente('Victor', 'Hugo', 17, '000.000.000-00');

console.log(pessoa)
console.log(aluno)
console.log(cliente)

console.log('---------------------')


console.log(pessoa.getNomeCompleto())
console.log(aluno.getNomeCompleto())
console.log(cliente.getNomeCompleto())
