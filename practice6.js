 marks = [12, 45, 99, 56];
let sum = 0;
for (let val of marks){
    sum += val;
}

let avg = sum / marks.length;
console.log(`avrage mark of the class ${avg}`);