function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw new Error('String is not correct');
  }
  return string.length;
}

module.exports = stringLength;