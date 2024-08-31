let items = [66, 75, 98, 200, 600, 90];
let index = 0;
for(let value of items){
    console.log(`value at index ${index} = ${value}`);
    let offer = value / 10;
    items[index] = items[index] - offer;
    console.log(`value after offer = ${items[index]}`);
    value++
}