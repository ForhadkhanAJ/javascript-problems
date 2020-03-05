//10module...9lesson...Reverse a string...
//1...
// function reverseString(str){
//     var reverse = "";
//     for(var i = 0; i < str.length; i++){
//         var char =  str[i];
//         reverse = char + reverse;

//     }
//     return reverse;
// }

// var statement = "Hello Alien Bhai Brother.";
// var forAlien = reverseString(statement);
// console.log(forAlien);

//1...(A)...
// function reverseString(str){
//     var reverse = "";
//     for(var i = 0; i < str.length; i++){
//         var char =  str[i];
//         reverse = char + reverse;

//     }
//     return reverse;
// }

// var statement = "Hello Alien Bhai Brother.";
// var forAlien = reverseString(statement);
// console.log(forAlien);
// var foodVlog = reverseString("Ki khawa jai... khida lagse");
// console.log(foodVlog);

//1...(B)...
var sentence = "I am hardworking. I am serious. I am sure I will do it";
var reverse = sentence.split('').reverse().join("");
console.log(reverse);