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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let arrayRetorno = [];
  for (numero of array) {
    if (numero % 3 === 0 && numero % 5 !== 0) {
      arrayRetorno.push('fizz');
    } else if (numero % 5 === 0 && numero % 3 !== 0) {
      arrayRetorno.push('buzz');
    } else if (numero % 3 === 0 && numero % 5 === 0) {
      arrayRetorno.push('fizzBuzz');
    } else if (numero % 3 !== 0 && numero % 5 !== 0) {
      arrayRetorno.push('bug!');
    }
  }
  return arrayRetorno;
}

// Desafio 9
function encode(string) {
  let texto = string.split('');

  for (let index = 0; index < texto.length; index += 1) {
    if (texto[index] === 'a') {
      texto[index] = 1;
    } else if (texto[index] === 'e') {
      texto[index] = 2;
    } else if (texto[index] === 'i') {
      texto[index] = 3;
    } else if (texto[index] === 'o') {
      texto[index] = 4;
    } else if (texto[index] === 'u') {
      texto[index] = 5;
    }
  }

  let TextoEncode = texto.join('');
  return TextoEncode;
}
function decode(string) {
  let texto = string.split('');

  for (let index = 0; index < texto.length; index += 1) {
    if (texto[index] === '1') {
      texto[index] = 'a';
    } else if (texto[index] === '2') {
      texto[index] = 'e';
    } else if (texto[index] === '3') {
      texto[index] = 'i';
    } else if (texto[index] === '4') {
      texto[index] = 'o';
    } else if (texto[index] === '5') {
      texto[index] = 'u';
    }
  }

  let TextoDecode = texto.join('');
  return TextoDecode;
}

// Desafio 10
function techList(array, pessoa) {
  let arrayOrdenado = array.sort();
  let retorno = [];

  if (arrayOrdenado.length === 0) {
    return 'Vazio!';
  }
  for (index of arrayOrdenado) {
    retorno.push({ tech: index, name: pessoa });
  }
  return retorno;
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
