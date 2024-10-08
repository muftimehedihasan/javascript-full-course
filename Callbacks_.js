// ৩. Callbacks (কলব্যাকস):

// কলব্যাক হলো একটি ফাংশন, যেটি আরেকটি ফাংশনের আর্গুমেন্ট হিসেবে পাস করা হয় এবং প্রয়োজন অনুযায়ী সেই ফাংশনের ভিতরে কল করা হয়। এটি সাধারণত অ্যাসিঙ্ক্রোনাস অপারেশন পরিচালনা করতে ব্যবহৃত হয়, যেমন API কল করা বা ডেটা লোড করা।

/**
 * ডেটা প্রসেস করার জন্য একটি ফাংশন
 * @param {string} data - প্রসেস করার জন্য ডেটা
 * @param {function} callback - ডেটা প্রসেস করার পর কল করা হবে এমন ফাংশন
//  */
// function processData(data, callback) {
//     console.log("Processing data...");
//     // ডেটা প্রসেস করার পর কলব্যাক ফাংশন কল করা হয়
//     callback(data); // ডেটা কলব্যাক ফাংশনে পাস করা হচ্ছে
// }

// ফাংশন কল করার সময় ডেটা এবং কলব্যাক পাস করা
// processData("Hello, World!", displayData);

/**
 * Function that accepts a callback
 * @param {function} callback - The callback function to be called after getting the user input
 */

/**
 * কলব্যাক ফাংশন, এটি ডেটা প্রসেস করার পর কল করা হয়
 * @param {string} data - প্রসেস করার জন্য ডেটা
 */
// function displayData(data) {
//     console.log("Data: " + data);
// }


// Example 2


// function processUserInput(callback) {
//     let name = prompt("Please enter your name:");  // Get user input
//     callback(name);  // Call the callback function with the user input
// }

// Using the function with a callback
// processUserInput(greet);

// // Callback function to be passed
// function greet(name) {
//     console.log("Hello, " + name);
// }


// Example 3

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);




// অ্যাসিঙ্ক্রোনাস (async) কলব্যাক হলো এমন একটি ফাংশন যা একটি অ্যাসিঙ্ক্রোনাস অপারেশনের পরে চালানো হয়। অ্যাসিঙ্ক্রোনাস অপারেশনগুলো সাধারণত দীর্ঘ সময় নেয় (যেমন, ফাইল পড়া, নেটওয়ার্ক অনুরোধ করা, ইত্যাদি), এবং এই ধরনের অপারেশনগুলোকে শেষ হওয়ার জন্য অপেক্ষা না করেই প্রোগ্রামটি অন্যান্য কাজ চালিয়ে যেতে পারে। এই সময়ে, অপারেশন শেষ হলে নির্দিষ্ট একটি ফাংশন (যেটি হলো কলব্যাক) চালানো হয়।

// কিভাবে অ্যাসিঙ্ক্রোনাস কলব্যাক কাজ করে:
    // 1. অ্যাসিঙ্ক্রোনাস অপারেশন শুরু: কোনো অ্যাসিঙ্ক্রোনাস কাজ শুরু হয়, যা এক বা একাধিক সেকেন্ড সময় নিতে পারে। প্রোগ্রাম এই কাজ শেষ হওয়ার জন্য অপেক্ষা না করে পরবর্তী কোডগুলো চালাতে থাকে।

    // 2. কলব্যাক ফাংশন: যখন অ্যাসিঙ্ক্রোনাস কাজটি শুরু হয়, তখন একটি ফাংশন বা কলব্যাক ফাংশন দিয়ে দেওয়া হয়, যা কাজটি শেষ হলে চালানো হবে।

    // 3. ইভেন্ট লুপ: যখন অ্যাসিঙ্ক্রোনাস কাজটি চলতে থাকে, প্রোগ্রামের ইভেন্ট লুপ অন্য সব সিঙ্ক্রোনাস কোডগুলো চালাতে থাকে। যখন কাজটি শেষ হয়, তখন ইভেন্ট লুপ সেই কলব্যাক ফাংশনটি চালায়।

    // 4. নন-ব্লকিং: প্রোগ্রাম চলতে থাকে এবং ব্লক হয় না (অর্থাৎ, অপেক্ষা করে না) অ্যাসিঙ্ক্রোনাস কাজটি শেষ হওয়ার জন্য।


// কেন অ্যাসিঙ্ক্রোনাস কলব্যাক ব্যবহার করা হয়:
    // 1. নেটওয়ার্ক অনুরোধ: কোনো API থেকে ডেটা আনার সময়, প্রোগ্রাম অন্য কাজ চালিয়ে যেতে পারে এবং অপেক্ষা না করে।
    // 2. ফাইল ইনপুট/আউটপুট: বড় ফাইল পড়া বা লেখার সময় এটি কার্যকরী হয়, কারণ এটি মূল থ্রেড ব্লক না করে।
    // 3. ইউআই এবং অ্যানিমেশন: ওয়েব ডেভেলপমেন্টের ক্ষেত্রে অ্যাসিঙ্ক্রোনাস কলব্যাক ব্যবহার করে UI ফ্রিজ হওয়া থেকে রক্ষা করা যায়।

// মূল ধারণা:
    // 1. নন-ব্লকিং: অ্যাসিঙ্ক্রোনাস কলব্যাকের প্রধান সুবিধা হলো এটি প্রোগ্রামকে ব্লক না করেই কাজ চালিয়ে যেতে দেয়।
    // 2. ইভেন্ট লুপ: বিশেষ করে জাভাস্ক্রিপ্টে, ইভেন্ট লুপ অ্যাসিঙ্ক্রোনাস অপারেশন শেষ হলে কলব্যাক ফাংশন চালাতে সাহায্য করে।
    // 3. কনকারেন্সি: একই সময়ে একাধিক অ্যাসিঙ্ক্রোনাস কাজ করা সম্ভব হয়।
// অ্যাসিঙ্ক্রোনাস কলব্যাক মূলত প্রোগ্রামকে দ্রুত এবং কার্যকরভাবে পরিচালনা করতে সাহায্য করে, বিশেষ করে যখন বড় বা সময়সাপেক্ষ কাজ করতে হয়।


// উদাহরণ: JavaScript-এ Async Callbacks

// console.log("শুরু");

// setTimeout(function() {
//     console.log("এটি একটি অ্যাসিঙ্ক্রোনাস কলব্যাক।");
// }, 2000); // ২ সেকেন্ডের ডিলে দিয়ে একটি অ্যাসিঙ্ক্রোনাস অপারেশন

// console.log("শেষ");
// আউটপুট:
// শুরু
// শেষ
// এটি একটি অ্যাসিঙ্ক্রোনাস কলব্যাক।

// কিভাবে কাজ করে:
    // 1. প্রথমে "শুরু" প্রিন্ট হয়।
    // 2. setTimeout ফাংশনটি ২ সেকেন্ডের জন্য একটি ডিলে (প্রতীক্ষা) সেট করে, তবে এটি প্রোগ্রামটিকে ব্লক করে না। এটি পরবর্তী লাইনগুলো চালাতে থাকে।
    // 3. "শেষ" প্রিন্ট হয় কারণ প্রোগ্রামটি অ্যাসিঙ্ক্রোনাস অপারেশন শেষ হওয়ার জন্য অপেক্ষা করে না।
    // 4. ২ সেকেন্ড পরে, "এটি একটি অ্যাসিঙ্ক্রোনাস কলব্যাক।" প্রিন্ট হয় যখন টাইমার শেষ হয়ে যায়।


// কলব্যাক ফাংশন জাভাস্ক্রিপ্টে খুবই গুরুত্বপূর্ণ এবং প্রায়শই ব্যবহৃত হয়, বিশেষ করে অ্যাসিঙ্ক্রোনাস কাজগুলো (যেমন, API কল, টাইমার, ইভেন্ট হ্যান্ডলিং ইত্যাদি) করতে। এখানে আরও কয়েকটি উদাহরণ এবং তাদের ব্যাখ্যা দেয়া হলো:

// ১. সেটটাইমআউট (setTimeout) এর সাথে কলব্যাক
// setTimeout একটি বিল্ট-ইন জাভাস্ক্রিপ্ট ফাংশন, যা একটি নির্দিষ্ট সময় পরে একটি ফাংশন (কলব্যাক) চালায়।

// function displayMessage() {
//     console.log("এই মেসেজটি ৩ সেকেন্ড পরে প্রদর্শিত হবে।");
// }

// setTimeout ফাংশন ৩ সেকেন্ড অপেক্ষা করে displayMessage ফাংশনটিকে কল করবে।
// setTimeout(displayMessage, 3000);

// ব্যাখ্যা:
// setTimeout(displayMessage, 3000): এখানে setTimeout ফাংশনটিকে ৩ সেকেন্ড (৩০০০ মিলিসেকেন্ড) পরে displayMessage ফাংশনটি কল করতে বলা হয়েছে।
// অ্যাসিঙ্ক্রোনাস: প্রোগ্রামটি অপেক্ষা করবে না; এটি চালিয়ে যাবে এবং ৩ সেকেন্ড পরে প্রদর্শন করবে।

// ২. অ্যারে ফাংশনের সাথে কলব্যাক: forEach
// forEach একটি অ্যারে মেথড যা প্রতিটি এলিমেন্টের জন্য একটি কলব্যাক ফাংশন চালায়।

// const numbers = [1,2,3,4,5];
// numbers.forEach(function(number) {
//     console.log("নাম্বার: " + number);
// });

// ব্যাখ্যা:
    // forEach: এটি একটি অ্যারের প্রতিটি উপাদানকে লুপের মাধ্যমে চালায় এবং প্রতিটি উপাদানের জন্য একটি ফাংশন (কলব্যাক) চালায়।
    // অনামা কলব্যাক ফাংশন: এখানে function(number) একটি অনামা (anonymous) কলব্যাক ফাংশন, যা প্রতিটি number ইনপুট হিসেবে গ্রহণ করে এবং কনসোলে প্রিন্ট করে।

// ৩. ইভেন্ট হ্যান্ডলিং এর সাথে কলব্যাক
// ইভেন্ট হ্যান্ডলার হিসেবে কলব্যাক ফাংশন অনেক ব্যবহৃত হয়, বিশেষ করে ব্রাউজার ইভেন্টগুলোর জন্য (যেমন, বাটনে ক্লিক করলে কিছু হওয়া)।

{/* <button id="myButton">Click Me</button> */}
{/* <scipt> */}
 
// document.getElementById("myButton").addEventListener("click", function(){
//     console.log("বাটনটি ক্লিক করা হয়েছে!");
// });

// </scipt>

// document.getElementById("myButton").addEventListener("click", function(){
//     console.log("Clickeed");
// })

// addEventListener: এই মেথডটি একটি ইভেন্টের জন্য অপেক্ষা করে। এখানে, click ইভেন্টের জন্য অপেক্ষা করছে।
// অনামা কলব্যাক ফাংশন: যখন ব্যবহারকারী বাটনে ক্লিক করে, তখন কলব্যাক ফাংশনটি চালানো হয় এবং কনসোলে মেসেজ প্রদর্শিত হয়।

// ৪. কাস্টম ফাংশনের সাথে কলব্যাক
// কলব্যাক ফাংশন দিয়ে আপনি নিজের ইচ্ছামতো কাস্টম কাজ করতে পারেন। এখানে একটি উদাহরণ যেখানে একটি গাণিতিক কাজ কলব্যাক ফাংশনের মাধ্যমে সম্পন্ন করা হচ্ছে:

// processUserInput = (callback) => {
//     let name = "John doe";
//     callback(name);
// }

// greetUser = (name) => {
//     console.log("Hello", " " + name);
// }

// processUserInput(greetUser);


// processData = (dataCallback)=> {
//     let data = "Data Processing";
//     dataCallback(data);
// }

// callbackData = (data) => {
//     console.log("Hello"," "+data);
// }

// processData(callbackData);

// That's awesome! Here are some beginner-friendly JavaScript tasks to help you practice. These tasks will reinforce your understanding of functions, callbacks, and basic JavaScript concepts.

// Task 1: Write a Simple Function

// Create a function that takes two numbers as arguments and returns their sum.

// addNumbers = (num1, num2) => {
//     return num1 + num2;
// };

// console.log(addNumbers(5, 15));

// Task 2: Create a Callback Function

// Write a function that accepts a callback. The function will log a message, and then call the callback function.

// logMessage = (callBack) => {
//     console.log("Hello This is a Message");
//     callBack();
// }

// logMessage(() => {
//     console.log("This a calback Function");
// });


// Task 3: Create a Function with a Delay
// Use setTimeout to simulate a delay in your code. After 2 seconds, log a message to the console.
// dealayedMesage = ()=> {
//     setTimeout( ()=> {
//         console.log("This function excute ifter 2 seceond ------!");
//     }, 2000);
// }

// dealayedMesage();

// Task 4: Write a Function with a Custom Callback
// // Write a function that asks for the user's name (use prompt or simulate it with a variable), and then pass a callback to greet the user.
// greetUserinput = (callback) => {
//     let name = "John";
//     callback(name);
// }

// greetUserinput((name) =>{
//     console.log("Hello , " +name+ " !");
// });


// greetUserInput = (callback) => {
//     let name = "John";
//     callback(name);
// }

// greetUserInput((name)=>{
//     console.log("Hello, " +name+ "!");
// });


// greetUserInput = (callback)=>{
//     let name = "John";
//     callback(name);
// }

// greet = (name) => {
//     console.log("Hello, " +name+ " !==== ");
// }

// greetUserInput(greet);

// Task 5: Create a Promise

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved!");
//     }, 3000);
// });

// myPromise.then((message) => {
//     console.log(message);
// });


// let myPtromise = new Promise((resolved, rejected) => {
//     setTimeout(() => {
//         resolved("promise resolved =====!!!");
//     }, 2000);
// });

// myPtromise.then((message) => {
//     console.log(message);
// });

// Task 6: Practice with forEach and Callback
// Create an array of numbers and use .forEach() to loop through the array, printing each number to the console using a callback.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// numbers.forEach((number)=>{
//     console.log(number);
// });


// Summary of Callback Types:
    // 1. Synchronous Callback: Executes immediately during the function call, in the current call stack.
    // 2. Asynchronous Callback: Executes after an asynchronous task (e.g., API call, timer).
    // 3. Named Callback: A pre-defined function that is passed as a callback.
    // 4. Anonymous Callback: An inline function with no name, passed directly to another function.
    // 5. Error-first Callback: A pattern where the callback's first argument is an error, used for error handling.


// কোলব্যাক ফাংশনগুলি বিভিন্ন ধরনের হতে পারে, তাদের ব্যবহারের ধরন এবং কখন তারা কার্যকর হবে তার উপর ভিত্তি করে। নিচে কিছু সাধারণ কোলব্যাক ফাংশনের ধরন এবং তাদের বাংলা ব্যাখ্যা দেওয়া হলো:

// ১. Synchronous Callback (সিঙ্ক্রোনাস কোলব্যাক):
// একটি সিঙ্ক্রোনাস কোলব্যাক ফাংশন তখনই কার্যকর হয় যখন মূল ফাংশন কার্যকর হচ্ছে। এটি কোডের সাধারণ প্রবাহে অন্যান্য কাজের আগে সম্পন্ন হয়।

// function greet(name, calback) {
//     console.log("Hello, " +name);
//     calback(); // সিঙ্ক্রোনাস কোলব্যাক ফাংশন
// }

// greet("Raihan", function() {
//     console.log("এটি একটি সিঙ্ক্রোনাস কোলব্যাক।");
// });

// বর্ণনা: এখানে callback ফাংশনটি তখনই চালু হবে যখন greet() ফাংশনটির প্রথম কাজ সম্পন্ন হয়ে যাবে। এটি সিঙ্ক্রোনাস কারণ এটি কোডের সাধারণ প্রবাহে বিলম্ব সৃষ্টি করে না।

// ২. Asynchronous Callback (অ্যাসিঙ্ক্রোনাস কোলব্যাক):
// একটি অ্যাসিঙ্ক্রোনাস কোলব্যাক ফাংশন তখন কার্যকর হয় যখন কোনো অ্যাসিঙ্ক্রোনাস কাজ (যেমন API কল, টাইমার) সম্পন্ন হয়। এই ফাংশনটি অন্যান্য কাজ শেষ হওয়ার পর কার্যকর হয়।

// function fetchData(callback){
//     setTimeout(() => {
//         console.log("ডেটা ফেচ করা হচ্ছে...");
//         callback("ডেটা পেয়ে গেছি!");
//     }, 2000);
// }

// fetchData(function(data){
//     console.log(data); // অ্যাসিঙ্ক্রোনাস কোলব্যাক
// });

// ৩. Named Callback (নেইমড কোলব্যাক):
// নেইমড কোলব্যাক ফাংশন হল এমন একটি ফাংশন যা একটি নাম দিয়ে সংজ্ঞায়িত করা হয় এবং অন্য ফাংশনের মধ্যে কোলব্যাক হিসেবে পাস করা হয়। এটি কোডকে আরও পাঠযোগ্য ও পুনঃব্যবহারযোগ্য করে তোলে।

// function processData(callback) {
//     let data = "কিছু ডেটা";
//     callback(data);
// }
// function handleData(data) {
//     console.log("ডেটা হ্যান্ডল করা হচ্ছে:", data);
// }

// processData(handleData); // নেইমড কোলব্যাক পাস করা হচ্ছে

// বর্ণনা: এখানে handleData একটি নেইমড কোলব্যাক ফাংশন যা processData ফাংশনের মধ্যে পাস করা হয়েছে।

// ৪. Anonymous Callback (বেনামি কোলব্যাক):
// বেনামি কোলব্যাক ফাংশন হল এমন একটি ফাংশন যা কোনো নাম ছাড়াই সরাসরি ইনলাইন হিসেবে পাস করা হয়। এটি সাধারণত একবার ব্যবহারের জন্য সুবিধাজনক।

// processData(function(data) {
//     console.log("বেনামি কোলব্যাক:", data);
// });

// বর্ণনা: এখানে কোলব্যাকটি ইনলাইন হিসেবে সরাসরি পাস করা হয়েছে এবং এর কোনো নাম নেই, এটি একবারের জন্য ব্যবহার করা হবে।

// ৫. Error-First Callback (এরর-ফার্স্ট কোলব্যাক):
// এরর-ফার্স্ট কোলব্যাক প্যাটার্নে কোলব্যাক ফাংশনের প্রথম আর্গুমেন্ট হয় একটি এরর অবজেক্ট, এবং পরবর্তী আর্গুমেন্টগুলো সফল ডেটার জন্য ব্যবহৃত হয়। এটি মূলত Node.js এ বেশি ব্যবহৃত হয়।

// function fetchData(callback) {
//     let error = null;
//     let data = "সফলভাবে ডেটা পাওয়া গেছে";

//     if (error) {
//         callback(error);
//     } else {
//         callback(null, data);  // কোনো এরর নেই, ডেটা ফেরত পাঠানো হচ্ছে
//     }
// }

// fetchData(function(error, data) {
//     if (error) {
//         console.error("এরর:", error);
//     } else {
//         console.log("ডেটা:", data);
//     }
// });

// বর্ণনা: এখানে যদি কোনো এরর থাকে, তবে সেটি প্রথম আর্গুমেন্ট হিসেবে পাস করা হবে। যদি কোনো এরর না থাকে, তবে ডেটা ফেরত পাবে।

// সংক্ষেপে:
    // সিঙ্ক্রোনাস কোলব্যাক: একই সাথে কার্যকর হয়, কোনো বিলম্ব নেই।
    // অ্যাসিঙ্ক্রোনাস কোলব্যাক: বিলম্বিতভাবে কার্যকর হয়, অ্যাসিঙ্ক্রোনাস কাজ শেষ হওয়ার পর।
    // নেইমড কোলব্যাক: নাম দিয়ে সংজ্ঞায়িত এবং পুনঃব্যবহারযোগ্য।
    // বেনামি কোলব্যাক: একবারের জন্য ব্যবহৃত ইনলাইন ফাংশন।
    // এরর-ফার্স্ট কোলব্যাক: প্রথম আর্গুমেন্টে এরর এবং দ্বিতীয় আর্গুমেন্টে ডেটা পাস করে এরর হ্যান্ডলিং সহজ করে।

// এই বিভিন্ন ধরনের কোলব্যাক ফাংশন JavaScript এ অ্যাসিঙ্ক্রোনাস কাজ এবং ইভেন্ট হ্যান্ডলিংকে আরও কার্যকর করে।

// ৫. প্রমিজ এবং অ্যাসিঙ্ক্রোনাস কাজের সাথে কলব্যাক
// প্রমিজ হচ্ছে অ্যাসিঙ্ক্রোনাস অপারেশনের জন্য একটি উন্নততর উপায়, যেখানে সফল এবং ব্যর্থতার জন্য আলাদা কলব্যাক থাকে।

// function fetchData(callbackSuccess, callbackError) {
//     let dataFetched = true;  // ধরে নেই যে ডেটা পাওয়া গেছে

//     if (dataFetched) {
//         callbackSuccess("ডেটা সফলভাবে পাওয়া গেছে!");
//     } else {
//         callbackError("ডেটা পাওয়া যায়নি!");
//     }
// }

// function onSuccess(message) {
//     console.log("সফলতা: " + message);
// }

// function onError(message) {
//     console.log("ভুল: " + message);
// }

// // এখানে দুটি কলব্যাক পাস করা হয়েছে, একটি সফলতার জন্য এবং একটি ব্যর্থতার জন্য
// fetchData(onSuccess, onError);

// ব্যাখ্যা:
    // // fetchData: এটি দুটি কলব্যাক ফাংশন গ্রহণ করে, একটি সফল হলে চালানো হয় এবং অন্যটি যদি ডেটা না পাওয়া যায়, তখন চালানো হয়।
    // callbackSuccess এবং callbackError: সফল বা ব্যর্থতার পরিমাণ অনুযায়ী সঠিক কলব্যাক ফাংশনটি চালানো হয়।
//=============================================================

// নিশ্চিতভাবেই! নিচে আরও কিছু উদাহরণ দেওয়া হলো যেখানে জাভাস্ক্রিপ্টে কলব্যাক ফাংশন ব্যবহার করা হয়েছে:
// ১. অ্যারে map() মেথডের সাথে কলব্যাক
// map() একটি অ্যারের প্রতিটি উপাদানের উপর একটি ফাংশন (কলব্যাক) প্রয়োগ করে এবং সেই নতুন মানগুলির একটি নতুন অ্যারে তৈরি করে।

// const numbers = [1, 2, 3, 4, 5];

// // প্রতিটি উপাদানের উপর একটি কলব্যাক ফাংশন প্রয়োগ করে, যেখানে প্রতিটি সংখ্যা দ্বিগুণ হচ্ছে
// const doubledNumbers = numbers.map(function(num) {
//     return num * 2;
// });

// console.log(doubledNumbers);

// ব্যাখ্যা:
    // numbers.map(): এটি একটি কলব্যাক ফাংশন নেয়, যা প্রতিটি উপাদানের উপর প্রয়োগ করা হয়। এখানে প্রতিটি সংখ্যা দ্বিগুণ করে নতুন একটি অ্যারে তৈরি করা হচ্ছে।
    // আউটপুট: [2, 4, 6, 8, 10]

// ২. filter() মেথডের সাথে কলব্যাক
// filter() মেথড অ্যারের প্রতিটি উপাদানের জন্য একটি শর্ত প্রয়োগ করে এবং সেই শর্ত পূরণ করা উপাদানগুলো নতুন অ্যারে হিসেবে ফেরত দেয়।

// const ages = [18, 21, 16, 30, 12, 25];

// // ১৮ বা তার চেয়ে বেশি বয়সের আইটেমগুলো ফিল্টার করে নেয়া হয়েছে
// const adults = ages.filter(function(age) {
//     return age >= 18;
// });

// console.log(adults);

// ব্যাখ্যা:
    // ages.filter(): এটি একটি কলব্যাক ফাংশন গ্রহণ করে, যা প্রতিটি উপাদানের জন্য শর্ত (এই ক্ষেত্রে, ১৮ বা তার বেশি বয়স) যাচাই করে এবং শর্ত পূরণ করা উপাদানগুলো নিয়ে একটি নতুন অ্যারে তৈরি করে।
    // আউটপুট: [18, 21, 30, 25]

// ৩. reduce() মেথডের সাথে কলব্যাক
// reduce() মেথড একটি অ্যারের প্রতিটি উপাদানকে একত্রিত করে একটি একক মানে পরিণত করে।

// const numbers = [1, 2, 3, 4, 5];

// // প্রতিটি সংখ্যার যোগফল বের করা হয়েছে
// const sum = numbers.reduce(function(total, num) {
//     return total + num;
// }, 0);

// console.log(sum);

// ব্যাখ্যা:
    // numbers.reduce(): এই মেথডটি একটি কলব্যাক ফাংশন নেয়, যেখানে প্রথম প্যারামিটার হলো total (এ পর্যন্ত যোগফল), এবং দ্বিতীয়টি হলো num (বর্তমান সংখ্যা)। reduce পুরো অ্যারের প্রতিটি উপাদানের জন্য এই ফাংশনটি চালায়।
    // আউটপুট: 15 (অর্থাৎ, ১+২+৩+৪+৫)

// ৪. আননোনিমাস (anonymous) কলব্যাক ফাংশন
// কলব্যাক ফাংশন সরাসরি ফাংশন ডেফিনিশন হিসেবে পাস করা যেতে পারে, যাকে আননোনিমাস (anonymous) ফাংশন বলা হয়। এটি কোনও নাম ছাড়া একটি ফাংশন।
// setTimeout(function() {
//     console.log("এই মেসেজটি ২ সেকেন্ড পরে দেখা যাবে।");
// }, 2000);

// ব্যাখ্যা:
    // setTimeout(): এটি একটি অ্যাসিঙ্ক্রোনাস ফাংশন যা ২ সেকেন্ড পরে কলব্যাক ফাংশনটি চালাবে।
    // আননোনিমাস ফাংশন: এখানে কলব্যাক ফাংশনটি কোনও নাম ছাড়াই সরাসরি পাস করা হয়েছে, এবং এটি ২ সেকেন্ড পরে কনসোলে মেসেজ প্রিন্ট করবে।
    // আউটপুট: ২ সেকেন্ড পরে এই মেসেজটি ২ সেকেন্ড পরে দেখা যাবে।

// ৫. জটিল কাস্টম কলব্যাক ফাংশন
// কখনও কখনও আপনি ফাংশনগুলোকে অন্য ফাংশনের মধ্যে কলব্যাক হিসেবে পাস করতে পারেন যেখানে অনেকগুলো ধাপ কাজ করে।

// function authenticateUser(username, callbackSuccess, callbackError) {
//     const validUsers = ["alice", "bob", "charlie"];
    
//     if (validUsers.includes(username)) {
//         callbackSuccess(username);
//     } else {
//         callbackError(username);
//     }
// }

// function onSuccess(username) {
//     console.log("অভিনন্দন, " + username + "! আপনি সফলভাবে লগইন করেছেন।");
// }

// function onError(username) {
//     console.log("দুঃখিত, " + username + "! আপনার নাম তালিকায় নেই।");
// }

// // সঠিক ব্যবহারকারীর জন্য সফল কলব্যাক, ভুল ব্যবহারকারীর জন্য ত্রুটি কলব্যাক
// authenticateUser("alice", onSuccess, onError);  // সফল হবে
// authenticateUser("david", onSuccess, onError);  // ত্রুটি হবে

// ব্যাখ্যা:

    // authenticateUser(): এটি একটি ব্যবহারকারীর নাম যাচাই করে এবং প্রয়োজন অনুযায়ী দুটি কলব্যাক ফাংশন চালায়: সফল হলে callbackSuccess, অন্যথায় callbackError।
    // onSuccess এবং onError: লগইন সফল হলে বা ব্যর্থ হলে আলাদা আলাদা কলব্যাক ফাংশন প্রয়োগ করা হয়।

// আউটপুট:
    // alice এর জন্য: "অভিনন্দন, alice! আপনি সফলভাবে লগইন করেছেন।"
    // david এর জন্য: "দুঃখিত, david! আপনার নাম তালিকায় নেই।"

// ৬. ইভেন্ট হ্যান্ডলার হিসেবে কলব্যাক
// একটি HTML ইভেন্টের জন্য কলব্যাক ফাংশন প্রায়ই ব্যবহৃত হয়, যেমন ক্লিক ইভেন্ট হ্যান্ডল করা।

{/* <button id="btn">Click me!</button>

<script>
    document.getElementById("btn").addEventListener("click", function() {
        console.log("বাটনটি ক্লিক করা হয়েছে!");
    });
</script>
 */}

// ব্যাখ্যা:
    // addEventListener(): এটি একটি ইভেন্টের জন্য অপেক্ষা করে এবং ইভেন্টটি ঘটলে কলব্যাক ফাংশনটি চালায়।
    // click ইভেন্ট: যখন ব্যবহারকারী বাটনটি ক্লিক করবে, তখন কলব্যাক ফাংশনটি চালানো হবে এবং কনসোলে মেসেজ প্রিন্ট হবে।
    // আউটপুট: বাটন ক্লিক করার পর কনসোলে "বাটনটি ক্লিক করা হয়েছে!" মেসেজ প্রিন্ট হবে।

// সারমর্ম:
// জাভাস্ক্রিপ্টে কলব্যাক ফাংশন একটি অত্যন্ত শক্তিশালী টুল যা অ্যাসিঙ্ক্রোনাস অপারেশন, ইভেন্ট হ্যান্ডলিং এবং অ্যারের বিভিন্ন মেথড (যেমন map, filter, reduce) ব্যবহারে সহায়তা করে। আপনি বিভিন্ন পরিস্থিতিতে কলব্যাক ফাংশন ব্যবহার করে প্রোগ্রামের আচরণ কাস্টমাইজ করতে পারেন এবং পুনরায় ব্যবহারযোগ্য কোড তৈরি করতে পারেন।


// প্রমিজ (Promise)========================================================

// জাভাস্ক্রিপ্টে প্রমিজ (Promise) হলো অ্যাসিঙ্ক্রোনাস অপারেশন পরিচালনা করার একটি পদ্ধতি, যা ভবিষ্যতে কিছু সময়ে একটি নির্দিষ্ট ফলাফল প্রদান করে— হয় সফলতা (resolved) অথবা ব্যর্থতা (rejected)। প্রমিজ ব্যবহার করে আপনি অ্যাসিঙ্ক্রোনাস কোডকে আরও সুসংহত এবং সহজে পরিচালনা করতে পারেন।

// একটি প্রমিজ ৩টি অবস্থা বা state-এ থাকতে পারে:
    // 1. Pending: অপারেশনটি চলছে এবং এখনো শেষ হয়নি।
    // 2. Fulfilled (Resolved): অপারেশনটি সফলভাবে শেষ হয়েছে এবং একটি ফলাফল (value) প্রদান করেছে।
    // 3. Rejected: অপারেশনটি ব্যর্থ হয়েছে এবং একটি ত্রুটি (error) প্রদান করেছে।

// প্রমিজ কীভাবে কাজ করে?
// ১. প্রমিজ তৈরি করা

// let myPromise = new Promise(function(resolve, reject){
//     // অ্যাসিঙ্ক্রোনাস কাজ শুরু
//     let success = true; // শর্ত অনুসারে ঠিক করুন

//     if (success) {
//         resolve("অপারেশন সফল হয়েছে!"); // সফল হলে resolve() কল হবে
//     } else {
//         reject("অপারেশন ব্যর্থ হয়েছে!"); // ব্যর্থ হলে reject() কল হবে
//     }
// });

// ব্যাখ্যা:

    // new Promise(): প্রমিজ তৈরি করতে আপনি এই কন্সট্রাক্টর ব্যবহার করেন, যা দুটি আর্গুমেন্ট (ফাংশন) নেয়— resolve এবং reject।
        // resolve: যখন অ্যাসিঙ্ক্রোনাস কাজ সফলভাবে সম্পন্ন হয়, তখন resolve() ফাংশনকে কল করা হয়।
        // reject: যদি অ্যাসিঙ্ক্রোনাস কাজ ব্যর্থ হয়, তখন reject() ফাংশনকে কল করা হয়।

// ২. প্রমিজ ব্যবহারের জন্য then() এবং catch()
// একবার প্রমিজ তৈরি করা হলে, আপনি then() মেথড ব্যবহার করে সফলতার (fulfilled) প্রতিক্রিয়া ধরতে পারেন এবং catch() মেথড দিয়ে ব্যর্থতার (rejected) প্রতিক্রিয়া ধরতে পারেন।

// myPromise
//     .then(function(successMessage){
//         console.log("সফলতা: " + successMessage); // সফল হলে এটি চলবে
//     })
//     .catch(function(errorMessage) {
//         console.log("ত্রুটি: " + errorMessage); // ব্যর্থ হলে এটি চলবে
//     }); 
// ব্যাখ্যা:
    // then(): যদি প্রমিজ সফল হয় (fulfilled), তাহলে then() মেথড চালানো হবে। এটি resolve থেকে প্রাপ্ত মান (message) গ্রহণ করে।
    // catch(): যদি প্রমিজ ব্যর্থ হয় (rejected), তাহলে catch() মেথড চালানো হবে। এটি reject থেকে প্রাপ্ত ত্রুটি বার্তা গ্রহণ করে। 

// উদাহরণ: একটি প্রমিজ ব্যবহার করে ডেটা ফেচ করা
// ধরুন, আমরা একটি API কল করছি যেখানে ডেটা ফেচ করতে কিছু সময় লাগবে। প্রমিজ ব্যবহার করে আমরা এটি করতে পারি।

// উদাহরণ: একটি প্রমিজ ব্যবহার করে ডেটা ফেচ করা
// ধরুন, আমরা একটি API কল করছি যেখানে ডেটা ফেচ করতে কিছু সময় লাগবে। প্রমিজ ব্যবহার করে আমরা এটি করতে পারি।

// function fetchData() {
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//             let dataFetched = true; // শর্ত অনুযায়ী সফলতা বা ব্যর্থতা নির্ধারণ করুন
//             if(dataFetched) {
//                 resolve("ডেটা সফলভাবে পাওয়া গেছে!"); // সফল হলে resolve() চালানো হবে
//             } else {
//                 reject("ডেটা পাওয়া যায়নি!"); // ব্যর্থ হলে reject() চালানো হবে
//             }
//         }, 2000); // ২ সেকেন্ড অপেক্ষা
//     });
// }

// fetchData()
//     .then(function(successMessage){
//         console.log("সফলতা: " + successMessage); // ডেটা সফলভাবে পাওয়া গেলে এটি চালানো হবে
//     })
//     .catch(function(errorMessage) {
//         console.log("ত্রুটি: " + errorMessage);
//     });

// ব্যাখ্যা:
    // 1. fetchData ফাংশন: এটি একটি প্রমিজ রিটার্ন করে। ২ সেকেন্ডের পরে শর্ত অনুযায়ী resolve() বা reject() কল করা হয়।
    // 2. then() এবং catch(): fetchData() সফল হলে then() মেথডটি চালানো হয় এবং মেসেজ প্রদর্শন করে। যদি ব্যর্থ হয়, তবে catch() মেথডটি চালানো হয় এবং ত্রুটির মেসেজ দেখায়।

// ৩. একাধিক প্রমিজের চেইনিং
// আপনি একাধিক প্রমিজকে একসাথে চেইন করে কাজ সম্পন্ন করতে পারেন। প্রথম প্রমিজ সফল হলে, পরবর্তী প্রমিজ চালানো হবে।

// function firstTask() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             console.log("প্রথম কাজ সম্পন্ন হয়েছে।");
//             resolve();
//         }, 1000);
//     });
// }

// function seceondTask() {
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//             console.log("দ্বিতীয় কাজ সম্পন্ন হয়েছে।");
//             resolve();
//         }, 2000);
//     });
// }

// firstTask()
//     .then(seceondTask) // প্রথম কাজ সফল হলে দ্বিতীয় কাজ শুরু হবে
//     .then(function() {
//         console.log("সব কাজ সম্পন্ন হয়েছে!");
//     });

// ব্যাখ্যা:
    // firstTask() এবং secondTask(): দুটি প্রমিজ রিটার্ন করে যা আলাদাভাবে কাজ সম্পন্ন করে।
    // চেইনিং: firstTask() সফল হলে, পরবর্তী প্রমিজ secondTask() চালানো হবে। সবগুলো কাজ শেষে কনসোলে "সব কাজ সম্পন্ন হয়েছে!" দেখানো হবে।

// ৪. Promise.all() মেথড

// Promise.all() ব্যবহার করে আপনি একাধিক প্রমিজের সমাপ্তি একসাথে পর্যবেক্ষণ করতে পারেন। সব প্রমিজ সফল হলে এটি একবারে ফলাফল প্রদান করে। যদি কোনও একটি প্রমিজ ব্যর্থ হয়, তাহলে পুরো Promise.all() ব্যর্থ হয়।

// let promise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("প্রমিজ ১ সম্পন্ন হয়েছে");
//     }, 1000);
// });

// let promise2 = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         resolve("প্রমিজ ২ সম্পন্ন হয়েছে");
//     }, 2000);
// });

// Promise.all([promise1, promise2])
//     .then(function(results) {
//         console.log(results); // ["প্রমিজ ১ সম্পন্ন হয়েছে", "প্রমিজ ২ সম্পন্ন হয়েছে"]
//     })
//     .catch(function(error) {
//         console.log("কোনও একটি প্রমিজ ব্যর্থ হয়েছে: " + error);
//     });

// ব্যাখ্যা:
    // Promise.all(): এটি একসাথে অনেকগুলো প্রমিজ পরিচালনা করে। সব প্রমিজ সফল হলে একসাথে তাদের ফলাফল ফেরত দেয়।
    // আউটপুট: সব প্রমিজ সফল হলে আউটপুট হবে ["প্রমিজ ১ সম্পন্ন হয়েছে", "প্রমিজ ২ সম্পন্ন হয়েছে"]।

// সারমর্ম:
    // প্রমিজ জাভাস্ক্রিপ্টের অ্যাসিঙ্ক্রোনাস কাজগুলোকে আরও পরিষ্কার এবং পরিচালনাযোগ্য করে তোলে।
    // then() মেথড সফল প্রমিজের জন্য ব্যবহৃত হয় এবং catch() মেথড ত্রুটি পরিচালনার জন্য ব্যবহৃত হয়।
    // প্রমিজ চেইনিং এবং Promise.all()-এর মতো মেথড ব্যবহার করে আপনি জটিল অ্যাসিঙ্ক্রোনাস কাজগুলো সহজে পরিচালনা করতে পারেন।


// async await======================================================

// async এবং await হলো জাভাস্ক্রিপ্টের আধুনিক ফিচার যা অ্যাসিঙ্ক্রোনাস (অ-পাশাপাশি) কোড লেখা আরও সহজ এবং পড়তে সহজ করে। এগুলো মূলত প্রমিজের উপর ভিত্তি করে কাজ করে, কিন্তু প্রমিজের .then() এবং .catch() মেথডগুলোর তুলনায় কোডকে আরও সোজাসাপ্টা এবং সিঙ্ক্রোনাস (পাশাপাশি) কোডের মতো দেখতে করে।

// ১. async কী?
    // একটি ফাংশনকে async ফাংশন হিসেবে ঘোষণা করলে, সেই ফাংশনটি সবসময় একটি প্রমিজ ফেরত দেয়।
    // অর্থাৎ, আপনি যদি কোনও ফাংশনের আগে async ব্যবহার করেন, তবে সেই ফাংশন প্রমিজ হিসেবে কাজ করবে, এবং আপনি সেই ফাংশনে await ব্যবহার করে অ্যাসিঙ্ক্রোনাস অপারেশন করতে পারবেন।

// ২. await কী?
    // await কিওয়ার্ডটি কেবলমাত্র async ফাংশনের ভেতরে ব্যবহার করা যায়।
    // এটি ব্যবহার করে আপনি কোনও প্রমিজ সমাধান (resolve) হওয়া পর্যন্ত অপেক্ষা করতে পারেন, যা কোডকে আরও সহজ এবং সিঙ্ক্রোনাসের মতো দেখতে করে।

// উদাহরণ দিয়ে ব্যাখ্যা করা যাক:
// ধরি, আমাদের একটি ফাংশন আছে যা ২ সেকেন্ড পরে কিছু ডেটা রিটার্ন করে:

// function getData() {
//     return new Promise((resolve, reject) {
//         setTimeout(() => {
//             resolve("ডেটা পাওয়া গেছে");
//         }, 2000);
//     });
// }

// প্রমিজ ব্যবহার করে এটি চালানো:

// getData()
// .then(data => {
//     console.log(data); // ২ সেকেন্ড পরে "ডেটা পাওয়া গেছে" দেখাবে
// })

// .catch(error => {
//     console.log(error);
// });

// এখন, আমরা যদি এই প্রমিজকে async এবং await দিয়ে পরিচালনা করি, তাহলে কোডটা আরও সহজ হয়ে যাবে।

// async function fetchData() {
//     console.log("ডেটা ফেচ করা হচ্ছে...");

//     // getData() প্রমিজ সমাধান হওয়া পর্যন্ত অপেক্ষা করবে
//     let data = await getData();

//     console.log(data); // "ডেটা পাওয়া গেছে" দেখাবে ২ সেকেন্ড পরে
// }

// fetchData();

// ব্যাখ্যা:
    // 1. async ফাংশন: fetchData() ফাংশনটি async দিয়ে ঘোষণা করা হয়েছে, যার মানে এটি একটি প্রমিজ রিটার্ন করবে এবং এর ভিতরে আমরা await ব্যবহার করতে পারব।
    // 2. await: await getData() লাইনটি বলছে যে, getData() প্রমিজটি সমাধান হওয়া পর্যন্ত অপেক্ষা করতে হবে, এবং প্রমিজ সমাধান হলে এর ফলাফল (ডেটা) পরবর্তী লাইনগুলিতে ব্যবহৃত হবে।
    // এখানে then() বা catch() এর দরকার নেই, কোডটি অনেকটাই সিঙ্ক্রোনাস (ধাপে ধাপে) স্টাইলে লেখা হয়েছে, যদিও এটি আসলে অ্যাসিঙ্ক্রোনাস।

// ৩. Error Handling (ত্রুটি পরিচালনা)
    // try...catch এর মাধ্যমে ত্রুটি (error) পরিচালনা করা যেতে পারে, যেমন .catch() প্রমিজের ক্ষেত্রে করা হয়।

    async function fetchData() {
        try {
            console.log("ডেটা ফেচ করা হচ্ছে...");
            
            let data = await getData();  // যদি getData() প্রমিজ ব্যর্থ হয়, তাহলে এটি ত্রুটি ছুঁড়বে
            
            console.log(data);  // সফল হলে ডেটা দেখাবে
        } catch (error) {
            console.error("ত্রুটি হয়েছে:", error);  // ত্রুটি হলে এখানে ধরা হবে
        }
    }
    
    fetchData();
    
// ব্যাখ্যা:    
    // try...catch ব্লকটি ব্যবহার করা হয়েছে সম্ভাব্য ত্রুটি ধরার জন্য। যদি getData() ফাংশন থেকে কোনও ত্রুটি ঘটে, তাহলে সেটি catch ব্লকের মধ্যে ধরা হবে এবং কনসোলে প্রদর্শিত হবে।

// ৪. একে অপরের উপর নির্ভরশীল একাধিক await
// ধরুন আপনার একাধিক অ্যাসিঙ্ক্রোনাস অপারেশন আছে, যেগুলো একের পর এক চালানো দরকার। await ব্যবহার করে এগুলো সহজে লেখা যায়:

// async function process() {
//     let step1 = await getData();  // প্রথম ধাপে ডেটা ফেচ হচ্ছে
//     console.log(step1); 
    
//     let step2 = await getData();  // দ্বিতীয় ধাপে আবারও ডেটা ফেচ হচ্ছে
//     console.log(step2);
// }

// process();

// ৫. একসাথে একাধিক প্রমিজ চালানো
// যদি একাধিক প্রমিজ একসাথে চালানোর দরকার হয়, তাহলে await এবং Promise.all() ব্যবহার করতে পারেন।

// async function processAll() {
//     let [result1, result2] = await Promise.all([getData(), getData()]);  
    
//     console.log(result1); // প্রথম প্রমিজের ফলাফল
//     console.log(result2); // দ্বিতীয় প্রমিজের ফলাফল
// }

// processAll();

// সারসংক্ষেপ:
// async: ফাংশনকে অ্যাসিঙ্ক্রোনাস ফাংশন বানায় এবং এটি সবসময় একটি প্রমিজ রিটার্ন করে।
// await: অ্যাসিঙ্ক্রোনাস অপারেশনের জন্য অপেক্ষা করে, প্রমিজ সমাধান (resolve) না হওয়া পর্যন্ত পরবর্তী কোড চালায় না।
// try...catch: ত্রুটি (error) পরিচালনার জন্য ব্যবহৃত হয় যখন await ব্যবহার করা হয়।

// async/await এর সাহায্যে অ্যাসিঙ্ক্রোনাস কোড আরও পড়তে সহজ, সিঙ্ক্রোনাস কোডের মতো দেখতে লাগে, এবং এর ফলে প্রমিজ চেইনিং বা কোলব্যাক হেল থেকে মুক্তি পাওয়া যায়।

// async/await ব্যবহার করে:

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("প্রথম ডেটা");
        }, 1000);
    });
}

async function getData() {
    try {
        const result1 = await fetchData();
        console.log(result1); // "প্রথম ডেটা"

        const result2 = await new Promise(resolve => {
            setTimeout(() => {
                resolve("দ্বিতীয় ডেটা");
            }, 1000);
        });
        console.log(result2); // "দ্বিতীয় ডেটা"
    } catch (error) {
        console.error("ত্রুটি:", error);
    }
}

getData();
