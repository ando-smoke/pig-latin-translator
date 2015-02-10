var pigLatin = function(word) {
  var vowelsRegEx = /^[aeiou]/i;
  var consonantsRegEx = /^([bcdfghjklmnpqrstvwxyz]+u*)(\w+)/i;
  var pigLatinWord = "";

  if (vowelsRegEx.test(word)) {
    pigLatinWord = word + "ay";
  }
  else if (consonantsRegEx.test(word)) {
    pigLatinWord = word.replace(consonantsRegEx, "$2$1ay");
  }
  return pigLatinWord;
};
