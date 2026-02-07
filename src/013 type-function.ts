/*
function mapStrings(array: Array<string>, callbackfn: CallableFunction): Array<string> {
  const newArray: Array<string> = new Array;

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i])); //callbackfn ta sendo declarada no parametro
  }

  return newArray;
}
*/

// CallableFunction é o type padrao quando há um callback dentro de uma função.
// não é 'correto' utilizar, pois o type de retorno dessa função nao fica explicito para a linguagem.
// a tipagem 'type' é utilizado dentro de uma função, para deixar explicito.



type mapStringsCallback = (item: string) => string;

function mapStrings(array: Array<string>, callbackfn: mapStringsCallback): Array<string> {
  const newArray: Array<string> = new Array;

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i])); //callbackfn ta sendo declarada no parametro
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, function(item: any) {
  return item.toUpperCase();
});

console.log(abcMapped);
