const arr = [1,2,3,4];
const tempArr = [];
let counter = 1;
for(let i=0;i<arr.length;i++) {
  for (let j=0;j<arr.length;j++) {
    if( i !== j) {
      counter = counter * arr[j];
    }
  }
  tempArr.push(counter);
  counter = 1;
}

console.log(tempArr)