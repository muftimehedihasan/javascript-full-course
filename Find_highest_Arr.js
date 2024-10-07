
findHighestNumber = (arr) => {
    let highest = arr[0];

    for(let i = 1; i < arr.length; i++){
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }

    return highest;
}

let n =[10, 5, 8,];

f = findHighestNumber(n);
console.log(f);