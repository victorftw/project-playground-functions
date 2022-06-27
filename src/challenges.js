// Desafio 1
function compareTrue(animalum, animaldois) {
  if (animalum === true && animaldois === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let areaTotal = (base * altura) / 2;
  return areaTotal;
}

// Desafio 3
function splitSentence(frase) {
  let retornoFrase = frase.split(' ');
  return retornoFrase;
}

// Desafio 4
function concatName(array) {
  let primeiroIndex = array[0];
  let ultimoIndex = array[array.length - 1];
  let retornoArray = ultimoIndex + ', ' + primeiroIndex;
  return retornoArray;
}

// Desafio 5
function footballPoints(vitorias, empates) {
  let pontos = vitorias * 3 + empates * 1;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let vezesAparece = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero < array[index]) {
      maiorNumero = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero === array[index]) {
      vezesAparece += 1;
    }
  }
  return vezesAparece;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
