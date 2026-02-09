# POO Programação Orientada a Objeto

## Pilares:

#### 1º Abstração

  Permite isolar de um objeto somente os conceitos que são necessários para o funcionamento de um programa.

  Exemplo:
  Na construção de um Humano, vários fatores são excluídos dessa Class;

  ``` TypeScript
    export class Pessoa {
      private nome: string;
      private sobrenome: string;

      constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
      }
    }
  ```

#### 2º Encapsulamento

  Visa ocultar partes internas de um objeto e exibir apenas o necessário para o uso externo.

  Exemplo:
  Não precisamos saber como um controle funciona para utiliza-lo, apenas suas funcionalidade explícitas

  ``` TypeScript
  export class RemoteControl {
    constructor(private powerStatus = false) {}

    public turnOn(): void {
      this.powerStatus = true;
    }

    public turnOff(): void {
      this.powerStatus = false;
    }

    public getStatus(): boolean {
      return this.powerStatus;
    }
  }
  ```

#### 3º Heranças

  Visa passar características de um objeto para outro.

  Exemplo:
  ``` TypeScript
  export abstract class Animal {
    constructor(public name: string) {}
      abstract makeNoise(): void;
  }

  export class Dog extends Animal {
    makeNoise(): void {
      console.log(`${this.name} está fazendo AU AU...`)
    }
  }

  export class Cat extends Animal {
    makeNoise(): void {
      console.log(`${this.name} está fazendo Miau...`)
    }
  }
  ```

#### 4º Polimorfismo

  Algo que é polimorfo tem a habilidade de assumir diferentes formas.

  Exemplo:
  ``` TypeScript
  class AnimalSounds {
    public playSound(animal: Animal): void { // 'Animal' faz referência a class do último exemplo.
      animal.makeNoise();
    }
  }

  const dog = new Dog('Tina');
  const cat = new Dog('Suzy');
  const animalSounds = new AnimalSounds();
  animalSounds.playSound(dog);
  animalSounds.playSound(cat);
  ```
