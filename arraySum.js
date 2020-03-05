//10module...6lesson...Sum of all numbers in an array...
// var numbers = [45, 56, 66, 77, 87, 67, 9, 10, 99, 95];
// var sum = 0;

// for(var i = 0; i < numbers.length; i++){
//     var element = numbers[i];
//     sum = sum + element;
// }
// console.log("Total of the numbers: ", sum);

//1...Practice...
var friendsName = ["Alu", "Sallu", "Challu", "Dulu", "Pillu", "Shillu", "Yahoo"];
var names = "";
for(var i = 0; i < friendsName.length; i++){
    var allNames = friendsName[i];
    var names = names + allNames;
}
console.log("My Friend Names: ",names);

//2..function diye Total...
// function getArraySum(numbers){
//     var sum = 0;
//     for(var i = 0; i < numbers.length; i++){
//         var element = numbers[i];
//         sum = sum + element;
//     }
//     return sum;
// }
// var numbers = [45, 56, 66, 77, 87, 67, 9, 10, 99, 95];

// var result = getArraySum(numbers);
// console.log("Total of the numbers: ", result);

//2...debug kore kore code read kore bojho, lal batti jaliye, police surjent hoye jao, code bojha tmar jonno onek shoj hoye jabe...
function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 56, 66, 77, 87, 67, 9, 10, 99, 95];
var result = getArraySum(numbers);
console.log("Total of the numbers: ", result);

var total1 = getArraySum([66, 77, 87, 67, 9, 10, 99]);
console.log("Total of the numbers: ", total1);