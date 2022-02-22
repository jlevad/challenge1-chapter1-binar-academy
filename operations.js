const add = (x, y) => (+x) + (+y);
const subtract = (x, y) => (+x) - (+y);
const multiply = (x, y) => (+x) * (+y);
const divide = (x, y) => (+x) / (+y);
const squareRoot = (x) => {
  return Math.sqrt(x)
}
const squareArea = (x) => {
  return x * x;
}
const cubeVolume = (x) => {
  return x * x * x;
}
const tubeVolume = (r, t) => {
  return Math.PI * (r * r) * t;
}

const validateNumbers = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  return true;
}

const validateSingleNumber = (x) => {
  if (isNaN(x)) {
    return false;
  }
  return true;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  validateNumbers,
  validateSingleNumber,
  squareRoot,
  squareArea,
  cubeVolume,
  tubeVolume,
}