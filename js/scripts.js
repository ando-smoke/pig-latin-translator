var pigLatin = function(word) {
  var vowelsRE = /^[aeiou]/i;
  var consonantsRE = /^([bcdfghjklmnpqrstvwxz]+u*|y)(\w+)/i;
  var pigLatinWord = "";

  if (vowelsRE.test(word)) {
    pigLatinWord = word + "ay";
  }
  else if (consonantsRE.test(word)) {
    pigLatinWord = word.replace(consonantsRE, "$2$1ay");
  }

  return pigLatinWord.toLowerCase();
};

var pigLatinSentence = function(sentence) {
  var words = sentence.split(" ");

  return words.map(pigLatin).join(" ");
};

$(document).ready(function() {
  $("form#pig_latin").submit(function(event) {
    var normalString = $("input#normal_string").val();
    var pigLatinString = pigLatinSentence(normalString);

    $(".in-pig-latin").text(pigLatinString);

    $("#result").show();
    event.preventDefault();
  });
});
