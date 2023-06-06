// Write your function here
function computeAverageLengthOfWords(word1, word2) {
    let totalLength = word1.length + word2.length;
    return totalLength / 2;
  }
  
  let output = computeAverageLengthOfWords('code', 'programs');
  console.log(output); // Output: 6
  