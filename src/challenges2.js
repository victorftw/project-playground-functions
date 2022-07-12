// Desafio 11
function pegarDdd(array) {
  let arrayDdd = [];
  let stringDdd = '';
  for (let index = 0; index <= 1; index += 1) {
    arrayDdd.push(array[index]);
  }
  stringDdd = arrayDdd.join('');
  return stringDdd;
}

function primeiraParte(array) {
  let arrayPrimeiraPt = [];
  let stringPrimeiraPt = '';
  for (let index = 2; index <= 6; index += 1) {
    arrayPrimeiraPt.push(array[index]);
  }
  stringPrimeiraPt = arrayPrimeiraPt.join('');
  return stringPrimeiraPt;
}

function segundaParte(array) {
  let arraySegundaPt = [];
  let stringSegundaPt = '';
  for (let index = 7; index < array.length; index += 1) {
    arraySegundaPt.push(array[index]);
  }
  stringSegundaPt = arraySegundaPt.join('');
  return stringSegundaPt;
}

function verificaTamanho(array) {
  return array.length !== 11;
}

function verificaAlgarismo(array) {
  for (let algarismo of array) {
    if (algarismo < 0 || algarismo > 9) {
      return true;
    }
  }
  return false;
}

function verificaRepeticaoIndividual(array, numero) {
  let count = 0;
  for (let index of array) {
    if (numero === index) {
      count += 1;
    }
  }
  return count >= 3;
}

function verificaRepeticao(array) {
  for (let index of array) {
    if (verificaRepeticaoIndividual(array, index)) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(array) {
  if (verificaTamanho(array)) {
    return 'Array com tamanho incorreto.';
  }
  if (verificaAlgarismo(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (verificaRepeticao(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  const ddd = pegarDdd(array);
  const primeira = primeiraParte(array);
  const segunda = segundaParte(array);
  return `(${ddd}) ${primeira}-${segunda}`;
}

generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);

// Desafio 12
function checaA(lineA, lineB, lineC) {
  return lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
}

function checaB(lineA, lineB, lineC) {
  return lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
}

function checaC(lineA, lineB, lineC) {
  return lineC < lineB + lineA && lineC > Math.abs(lineB - lineA);
}

function triangleCheck(lineA, lineB, lineC) {
  const primeiraCondicao = checaA(lineA, lineB, lineC);
  const segundaCondicao = checaB(lineA, lineB, lineC);
  const terceiraCondicao = checaC(lineA, lineB, lineC);
  return primeiraCondicao || segundaCondicao || terceiraCondicao;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
