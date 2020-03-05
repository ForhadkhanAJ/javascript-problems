//10module...8lesson...Count the number of words in a string...
//1...(A)
// var speech = "I am a good boy";
// console.log(speech.length);

//1...(B), (o, theke 1, 2 Avabe shuru hobe mone ase to..(orthat tumi, kono akta string er index diye tar position er elemento ber korte paro).)
// var speech = "I am a good boy";
// console.log(speech[2]);

//1...(C)...
// var speech = "I am a good boy, I am very happy Alhamdulillah";

// var count = 0;
// for(var i = 0; i < speech.length; i++){
//     var char = speech[i];
//     if(char == " "){
//         count++;
//     }
// }
// console.log(count);

//1...(D)...
// var speech = "I am a good boy, I am very happy Alhamdulillah";

// var count = 0;
// for(var i = 0; i < speech.length; i++){
//     var char = speech[i];
//     if(char == " "){
//         count++;
//     }
// }
// count++;
// console.log(count);

//1...(E)...halka complex...
// var speech = "I am a    good boy,     I am very happy Alhamdulillah";

// var count = 0;
// for(var i = 0; i < speech.length; i++){
//     var char = speech[i];
//     if(char == " " && speech[i-1] !=" "){
//         count++;
//     }
// }
// count++;
// console.log(count);
