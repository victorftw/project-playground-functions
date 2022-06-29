// Desafio 1
function compareTrue(animalum, animaldois) {
  return animalum === true && animaldois === true;
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
  let retornoArray = `${ultimoIndex}, ${primeiroIndex}`;
  return retornoArray;
}

// Desafio 5
function footballPoints(vitorias, empates) {
  let pontos = vitorias * 3 + empates * 1;
  return pontos;
}

// Desafio 6
function findHighestNumber(array) {
  let maiorNumero = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero < array[index]) {
      maiorNumero = array[index];
    }
  }
  return maiorNumero;
}

function highestCount(array) {
  const maiorNumero = findHighestNumber(array);
  let vezesAparece = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero === array[index]) {
      vezesAparece += 1;
    }
  }
  return vezesAparece;
}

// Desafio 7 // Feito com a mentoria do Nasc.
function catAndMouse(mouse, cat1, cat2) {
  let distanciaC1 = Math.abs(cat1 - mouse);
  let distanciaC2 = Math.abs(cat2 - mouse);

  if (distanciaC1 < distanciaC2) {
    return 'cat1';
  }
  if (distanciaC1 > distanciaC2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function getCorrectFizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(array) {
  let arrayRetorno = [];
  for (let number of array) {
    const result = getCorrectFizzBuzz(number);
    arrayRetorno.push(result);
  }
  return arrayRetorno;
}

// Desafio 9
function encode(string) {
  let texto = string.split('');
  const dicionario = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let index = 0; index < texto.length; index += 1) {
    let letraAtual = texto[index];
    let resultado = dicionario[letraAtual];
    if (resultado) {
      texto[index] = resultado;
    }
  }

  let TextoEncode = texto.join('');
  return TextoEncode;
}
function decode(string) {
  let texto = string.split('');
  const dicionario = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let index = 0; index < texto.length; index += 1) {
    let letraAtual = texto[index];
    let resultado = dicionario[letraAtual];
    if (resultado) {
      texto[index] = resultado;
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
  for (let index of arrayOrdenado) {
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
