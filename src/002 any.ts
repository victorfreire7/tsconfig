// any é um tipo que engloba todos os outros.
// "falta de tipo.
// caso um valor nao tenha o type explicito, ele se torna any.

function show(msg:any): any {
  return console.log(msg);
}

show('olá');
show([1, 2, 3]);

