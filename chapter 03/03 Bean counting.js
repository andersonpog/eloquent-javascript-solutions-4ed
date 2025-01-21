// Your code here.
function countBs(word){
  let count =0
  for(let i=0; i<word.length;i++)
    if(word[i] == 'B') count++
  return count
}

function countChar(word, c){
  let count =0
  for(let i=0; i<word.length;i++)
    if(word[i] == c) count++
  return count
}

countBs = word => countChar(word, "B")


console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
