console.log("******№11******")
//Make Math function to 2 parametrs(a and b=> +/-/*/=). ADD operation with callback function;
const math = function(a, b, callback){
console.log("Common amount: ", callback(a, b));
}
// const add = function (a,b){
//     return a + b;
// }
//math(3, 5, add);

// const sub = function (a,b){
//     return a - b;
// }
//math(8, 4, sub);

// const mult = function (a,b){
//     return a * b;
// }
//math(4, 5, mult);

// const div = function (a,b){
//     return a / b;
// }
//math(6, 2, div);

//THE SAME with anonimus function
//ADD
math(3, 5, function(a, b) {
    return a + b;});
//SUB
math(8, 4, function(a, b) {
    return a - b;});
//MULT
math(4, 5, function(a, b) { 
    return a * b;});
//DIVIDE
math(6, 2, function(a, b) {
    return a / b;});