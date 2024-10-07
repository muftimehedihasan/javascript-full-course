// মেমোইজেশন (Memoization) হলো একটি অপটিমাইজেশন টেকনিক, যেখানে ব্যয়বহুল ফাংশনের কলগুলোর ফলাফল সংরক্ষণ করা হয় এবং একই ইনপুট পুনরায় আসলে সংরক্ষিত (ক্যাশড) ফলাফল ফিরিয়ে দেওয়া হয়। এটি বিশেষভাবে দরকারী যখন একটি ফাংশন বারবার একই আর্গুমেন্ট নিয়ে কল করা হয়।

// মেমোইজেশনের উদাহরণ:

// মেমোইজেশন ছাড়া:

// slowFunction =(num) => {
//     console.log('গণনা হচ্ছে...'); // ব্যয়বহুল কোনো গণনা যেমন ধরে নেওয়া হয়েছে
//     return num * 2;
// }

// console.log(slowFunction(5));  // প্রথমবার কল করলে গণনা করবে এবং 10 রিটার্ন করবে
// console.log(slowFunction(5)); // আবার একই সংখ্যার জন্য গণনা করবে এবং 10 রিটার্ন করবে

// এখানে, প্রতিবার slowFunction(5) কল করলে এটি পুনরায় গণনা করে, যা অপ্রয়োজনীয় সময় এবং রিসোর্স খরচ করে।


//====================================================
// মেমোইজেশন ব্যবহার করে:

// memoizedFunction = () => {
//     const cache = {};

//     return (num)=> {
//         if (cache[num]) {
//             console.log('ক্যাশ থেকে পাওয়া যাচ্ছে...');
//             return cache[num];
//         } else {
//             console.log('গণনা হচ্ছে...');
//             const result = num * 2;
//             cache[num] =  result; 
//             return result;
//         }
//     };
// }

//  const memoized = memoizedFunction();

//  console.log(memoized(5));
//  console.log(memoized(5));

//=====================================================
//   কলে ব্যাক ফাংশন হলো এমন ফাংশন, যা অন্য একটি ফাংশনের আর্গুমেন্ট হিসেবে পাস করা হয় এবং সেই ফাংশনের কার্যক্রম শেষ হওয়ার পরে ডাকা হয়।
//   আপনি যদি কলব্যাক ফাংশনের উদাহরণ চান, তাহলে আমরা এই অ্যানোনিমাস ফাংশনটিকে কলব্যাক হিসেবে ব্যবহার করতে পারি। উদাহরণস্বরূপ:

// processNumber = (num, callback) => {
//     return callback(num);
// }

// const cache = {};

// const memoizedFunction = (num) => {
//     if (cache[num]) {
//         console.log('ক্যাশ থেকে পাওয়া যাচ্ছে...');
//         return cache[num];
//     } else {
//         console.log('গণনা হচ্ছে...');
//         const result = num * 2;
//         cache[num] = result;
//         return result;
//     }
// };

// console.log(processNumber(5, memoizedFunction));
// console.log(processNumber(5, memoizedFunction)); 

// //   এখানে processNumber ফাংশনটি memoizedFunction কে কলে ব্যাক হিসেবে নিচ্ছে এবং callback(num) দিয়ে সেই ফাংশনটিকে কার্যকর করছে।





// memoization = () => {
//     const cache = {};

//     return (n) => {
//         if(cache[n]){
//             console.log('from cache');
//             return cache[n];
//         }
        
//         else {
//             console.log('from shuru');
//             const result = n * 3;
//             cache[n] = result;
//             return result;
//         }
//     } 
// }

// mem = memoization();

// console.log(mem(3));
// console.log(mem(3));




memoizaitonFunction = () => {
    const cashe= {};



    return(number) =>{
        if(cashe[number]) {
            console.log('this data from cashe');
            return cashe[number];
        } else {
            console.log('this data from begen');
            const result = number * 2;
            cashe[number] = result;
            return result;

        }
    }
}

 memo = memoizaitonFunction();

 console.log(memo(5));
 console.log(memo(5));
 console.log(memo(5));
 console.log(memo(5));
 console.log(memo(4));
 console.log(memo(3));
 console.log(memo(3));