const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  let newArray = [];
  for (i = 0; i < letters.length; i++) {
    for (j = 0; j < letters[i].length; j++) {
      if (letters[i][j] === undefined) continue;
      if (newArray[j] === undefined) newArray[j] = [];

      newArray[j][i] = letters[i][j];
    }
  }

  const verticalJoin = newArray.map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
