function capitalizeText(string) {
  if (!string || string.length < 1) {
    return;
  } else {
    const revisedString = string.charAt(0).toUpperCase() + string.slice(1);
    return revisedString;
  }
}

module.exports = capitalizeText;