
// জাভাস্ক্রিপ্টে ফাংশনস (functions) হলো কোডের একটি ব্লক, যা নির্দিষ্ট কাজ সম্পাদন করে। ফাংশনসের বিভিন্ন ধরন আছে, যেমন function declaration, arrow functions, এবং callbacks। নিচে প্রতিটি সম্পর্কে বিস্তারিত ব্যাখ্যা করা হলো:

// ১. Function Declaration (ফাংশন ডিক্লারেশন):
// ফাংশন ডিক্লারেশন পদ্ধতিতে একটি ফাংশন তৈরি করা হয় এবং এটি কোডের যেকোনো অংশ থেকে কল করা যায়, কারণ এটি hoisting সমর্থন করে (ফাংশনটি ডিফাইন করার আগেও এক্সিকিউট করা যায়)।

// // ফাংশন ডিক্লারেশন
// function addNumbers(a, b){
//     // এই ফাংশনটি দুইটি সংখ্যা যোগ করে এবং ফলাফল রিটার্ন করে
//     // @param {number} a - প্রথম সংখ্যা
//     // @param {number} b - দ্বিতীয় সংখ্যা
//     // @returns {number} a + b
//     return a + b;
// }
// ফাংশন কল করা
// let result = addNumbers(5, 3);
// console.log(result);


// Hoisting: উপরের ফাংশনটি যদি ডিক্লারেশনের আগে কল করা হয়, তবুও এটি কাজ করবে কারণ ফাংশন ডিক্লারেশন hoisting হয়।


// ২. Arrow Functions (অ্যারো ফাংশন):
const addNumbersArrow = (a, b) =>{
    return a + b;
}
const addNumbersArrow1 = addNumbersArrow(12, 56);
console.log(addNumbersArrow1);


const addNumbersArrow2 = (a, b) => a + b;
let result_addNumbersArrow2 = addNumbersArrow2(113, 4);
console.log(result_addNumbersArrow2);

// Arrow Function এর বৈশিষ্ট্য:
// ফাংশনের মধ্যে return যদি এক লাইন হয়, তবে ব্রেস {} এবং return বাদ দেওয়া যায়।

// এটি this এর কনটেক্সট ধরে রাখে। অর্থাৎ, this ফাংশনের বাইরের কনটেক্সট থেকে নেয়।