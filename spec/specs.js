describe('pigLatin', function() {
  it('takes a word starting with a vowel and returns the word with "ay" at the end', function() {
    expect(pigLatin("inchworm")).to.equal("inchwormay");
  });

  it('takes a word starting with 1+ consonants and returns the word that has all of those first consecutive consonants moved to the end and add "ay"', function() {
    expect(pigLatin("schwartz")).to.equal("artzschway");
  });

  it('takes a word starting with 1+ consonants and returns the word that has all of those first consecutive consonants moved to the end and add "ay"', function() {
    expect(pigLatin("trying")).to.equal("yingtray");
  });

  it('takes a word starting with 1+ consonants ("qu" included) and returns the word that has all of those first consecutive consonants moved to the end and add "ay"', function() {
    expect(pigLatin("question")).to.equal("estionquay");
  });

  it('takes a word starting with 1+ consonants ("qu" included) and returns the word that has all of those first consecutive consonants moved to the end and add "ay"', function() {
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });

  it('takes a word starting with "y" and returns the word with the initial "y" removed and appended to the end along with the sequence "ay"', function() {
    expect(pigLatin("yellow")).to.equal("ellowyay");
  });
});

describe('pigLatinSentence', function() {
  it('takes a sentence and returns the sentence in pig latin', function() {
    expect(pigLatinSentence("How now brown cow")).to.equal("owhay ownay ownbray owcay");
  });

  it('takes a sentence and returns the sentence in pig latin (ending punctuation considered)', function() {
    expect(pigLatinSentence("Hello, kind sir!")).to.equal("ellohay, indkay irsay!");
  });
});
