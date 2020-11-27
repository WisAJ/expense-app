const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function isWord(word){
    return word.length> 6
}

const result = words.filter(isWord);
// const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

function isBigEnough(value) {
    return value >= 10
  }
  
  let filtered = [12, 5, 8, 130, 44].filter(value => value>=10)
  console.log(filtered)


