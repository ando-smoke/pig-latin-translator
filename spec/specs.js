describe('pigLatin', function() {
  it('takes a word starting with a vowel and returns the word with "ay" at the end', function() {
    expect(pigLatin("inchworm")).to.equal("inchwormay");
  });
});
