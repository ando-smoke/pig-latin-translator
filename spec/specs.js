describe('pigLatin', function() {
  it('takes a word starting with a vowel and returns the word with "ay" at the end', function() {
    expect(pigLatin("inchworm")).to.equal("inchwormay");
  });

  it('takes a word starting with 1+ consonants and returns the word that has all of those first consecutive consonants moved to the end and add "ay"', function() {
    expect(pigLatin("schwartz")).to.equal("artzschway");
  });

  it('takes a word starting with 1+ consonants and returns the word that has all of those first consecutive consonants moved to the end and add "ay"', function() {
    expect(pigLatin("trying")).to.equal("ingtryay");
  });

  it('takes a word starting with 1+ consonants ("qu" included) and returns the word that has all of those first consecutive consonants moved to the end and add "ay"', function() {
    expect(pigLatin("question")).to.equal("estionquay");
  });

  it('takes a word starting with 1+ consonants ("qu" included) and returns the word that has all of those first consecutive consonants moved to the end and add "ay"', function() {
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });
});
