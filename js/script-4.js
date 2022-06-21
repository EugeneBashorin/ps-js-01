// sort the array by alfabetically order on the first letter of the word
// ['pyton','js','c#','php','ruby','haskel',]
console.log('EX js-4');
const sortArr = ['go','vue','angular','pyton','js','c#','php','ruby','haskel',];
console.log(sortArr);
for (let i=1; i < sortArr.length; i+=1){
    for(let j = 0; j < sortArr.length-1; j+=1){
        if(sortArr[i][0] < sortArr[j][0]){
            let x =  sortArr[j];
            sortArr[j] = sortArr[i];
            sortArr[i] = x;
        }
    }
}
console.log(sortArr);