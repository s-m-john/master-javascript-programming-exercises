// Write your function here

function isSameLength (word1,word2) {
    let w1 = word1.length;
    let w2 = word2.length;

    if (w1 === w2) {
        return true
    } else {
        return false
    }
}
output = isSameLength('cat','dog')
console.log(output)