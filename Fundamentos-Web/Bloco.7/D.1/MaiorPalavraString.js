const phrase = "Antônio foi no banheiro e não sabemos o que aconteceu";

const longestWord = (string) => {
  const splitPhrase = string.split(' ');
  const findingLongestWord = splitPhrase.sort ((a, b) => b.length - a.length)
  const result = findingLongestWord[0];
  return result;
}

console.log(longestWord(phrase));