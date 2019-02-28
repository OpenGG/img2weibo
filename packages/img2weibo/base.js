
const base = (str, radix) => {
  if (radix < 2) {
    radix = 2;
  } else if (radix > 62) {
    radix = 62;
  }

  if (radix >= 2 && radix <= 36) {
    return parseInt(str, radix);
  }

  const letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let sum = 0;
  str.split('')
    .reverse()
    .forEach((letter, index) => {
      const num = letters.indexOf(letter) * Math.pow(radix, index);

      sum += num;
    });
  return sum;
};

module.exports = base;
