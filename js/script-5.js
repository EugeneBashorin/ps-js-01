// Find Min namber in array
// [12, 3, 6, 4, 1, 9,]
console.log('EX js-5');
const sortArr = [12, 3, 6, 4, 1, 9,];
let minNumer = sortArr[0]
for(let i=1; i<sortArr.length; i+=1){
    if(sortArr[i] <= minNumer){
        minNumer = sortArr[i];
    }
}
console.log(`Min number of array ${sortArr} is ${minNumer}`);

