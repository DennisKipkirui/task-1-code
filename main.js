function longer(champ, contender) {
  return (contender.length > champ.length) ? contender : champ;
}

function longestWord(str) {
  var words = str.split(' ');
  return words.reduce(longer);
}

console.log(longestWord("Smart people learn from everything and everyone, average people from their experience, stupid people already have all the answers"));