

let numArray = ['0','1','2','3'];
let max = numArray[0];
let min = numArray[0];
for (const element of numArray) {
    if(element > max)
        max = element;
    if(element < min)
    min = element;
}
console.log('Max:',max);
console.log('Min:',min);

let cities = ['Tokyo','Toronto','New York'];
let reversedCities = [];
for (const element of cities) {
    reversedCities.unshift(element);

}
console.log(cities);
console.log(reversedCities);

cities.reverse();
console.log(cities);

let number = [20,30, 50, 40 , 10];
let sum = 0;
for (const element of number) {
    sum += element
    
}
console.log(sum);//


let number1 = [20,30,50,40,10];
let number2 = number1.map(element => element * 2);
console.log(number2);

let nums = [ 3,5,4,6,7,8,9,2];
let evenNums = nums.filter(e => e  % 2 == 0);
console.log(evenNums);

let num2 = [ 3,5,2,6,7,8,9,2 ];
let target = 5;
let count = 0;
for (const element of num2) {
    if(element == target)
        count++;
    
}
console.log("count:",count);