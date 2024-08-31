// function countVowels(string){
//     let count = 0;
//     for (const char of string){
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ){
//             count++
//         }
//     }
//     console.log(count);
//     return count;
// }
// countVowels("hello");


function countVowels(string){
   let count = 0;
   for(const char of string){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "l"){
        count++
        // console.log(count);
    }
   }
   console.log(count);
   return count;
}

countVowels("Hello");