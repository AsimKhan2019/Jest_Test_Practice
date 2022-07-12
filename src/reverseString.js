function reverseString(string) {
  let splitString = string.split("");
  let reverseText = splitString.reverse("");
  let finalString = reverseText.join("");
  return finalString;
}

module.exports = reverseString;