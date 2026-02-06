// ENUM is a feature that allows you to define
//  a set of namede, constant values,
// which can be either numeric os string-based

// estrutura de dados nao ordenada

enum Colors {
  red, // 0
  blue, // 1
  yellow, // 2
}

console.log(Colors);
console.log(Colors.red) // é retornado '0', como se fosse o código do valor. os valores podem ser alterados
console.log(Colors[0])
console.log('----------------------------------------')

enum Colors2 {
  red = 10,
  blue = 100,
  yellow = 200,
}

console.log(Colors2);
console.log(Colors2.red) // é retornado '0', como se fosse o código do valor. os valores podem ser alterados
console.log(Colors2[10])
console.log('----------------------------------------')

//conseguimos tambem unir dois enum
enum Colors2 {
  purple = 'PURPLE',
  green = 'GREEN'
}

console.log(Colors2);
console.log('----------------------------------------')

// pode ser usado como um type.

function selectColor(color: Colors): void {
  console.log(Colors[color]);
}

selectColor(Colors.blue)
