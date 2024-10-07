// Factorial হলো গণিতের একটি ধারণা যেখানে একটি ধনাত্মক পূর্ণ সংখ্যার সমস্ত পূর্ববর্তী ধনাত্মক পূর্ণ সংখ্যার গুণফল নির্ণয় করা হয়।

// JavaScript-এ Factorial বের করার দুটি উপায় আছে:
// ১. Iterative পদ্ধতি:

// এখানে আমরা একটি লুপ ব্যবহার করে Factorial বের করি। ধাপে ধাপে n থেকে ১ পর্যন্ত গুণফল বের করা হয়।

const factorial = (n) => {
    let result = 1;
    for(i = n; i > 0; i--) {
        result = result * i;
    }
    return result;
}

console.log(factorial(4));


// ২. Recursive পদ্ধতি:
// খানে ফাংশন নিজেই নিজের মধ্যে পুনরাবৃত্তি (recursion) করে কাজ করে।


const factorial2 = (n) => {
    if(n===0){
        return 1;
    } else {
        return n * factorial2(n - 1);
    }
}

console.log(factorial2(5));