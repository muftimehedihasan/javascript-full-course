// const countVaules = (string) =>{
//     let count = 0;
//     for(let char of string){
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
//     return count;
// }

// let result = countVaules("hello");
// // console.log(countVaules)
// console.log(result);
  

const countVowels = (string) => {
    let count = 0; // `count` ভ্যারিয়েবলটি `let` দিয়ে ডিক্লেয়ার করা হয়েছে।
    for (let char of string) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || 
            char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
            count++; // শুধুমাত্র যখন `char` একটি স্বরবর্ণ, তখনই `count` বাড়বে।
        }
    }
    // console.log(count);
    return count;
}

// let result = countVowels("hello"); // `countVowels` ফাংশনটি ডাকা হয়েছে এবং ফলাফল `result`-এ সংরক্ষণ করা হয়েছে।
// console.log(result); // ফলাফলটি কনসোলে দেখা হবে।

