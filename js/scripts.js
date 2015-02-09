var pigLatin = function(word) {
  var vowelsRegEx = /^[aeiou]/;
  var pigLatinWord = "";

  if (vowelsRegEx.test(word)) {
    pigLatinWord = word + "ay";
  }
  return pigLatinWord;
};
