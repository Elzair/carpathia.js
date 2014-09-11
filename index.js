exports.translate = function(dictionary, language, symbol) {
  if (!dictionary || typeof dictionary !== 'object' || !dictionary.languages ||
      typeof dictionary.languages !== 'object') {
        throw new Error("dictionary parameter has invalid format!");
  }

  if (!language || !dictionary.languages.hasOwnProperty(language)) {
    throw new Error("Invalid language: " + language);
  }

  if (!symbol || !dictionary.languages[language].hasOwnProperty(symbol)) {
    throw new Error("Invalid symbol: " + symbol + " for language: " + language);
  }

  return dictionary.languages[language][symbol];
};
