function somar(inputNumber01, inputNumber02) {
  const notNumbers = isNaN(inputNumber01) || isNaN(inputNumber02);
  if (notNumbers) {
    return "Erro";
  }
  return inputNumber01 + inputNumber02;
}

exports.somar = somar;
