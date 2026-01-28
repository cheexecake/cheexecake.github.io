let temperature = 18;

if (temperature < 10){
    console.log("Cold");
}else if (temperature >=10 && temperature >= 25){
    console.log("Warm");
}else {
    console.log("Hot");
}

let day = "Saturday";
switch (day) {
    case "Saturday":
    case "Sunday":
    console.log("Weekend");
    break;

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log("Weekday");
    break;

     default:
        console.log("Invalid day");
}

let count = 10;

while (count >=1) {
    console.log(count);
    count--;
}

let i = 1;
    do {console.log(i * 4);
     i++;   
        
    } while (i <= 6);


let shoppingList = ["Milk","Eggs","Bread","Apples"];
for(let index = 0;index < shoppingList.length;index++) {
    console.log(index + ": " + shoppingList[index]);
}

let user = {
    name : "Michael",
    age : 22,
    city : "Toronto",
};
for (let key in user){
    console.log(key + ":", user[key]);
}

let scores = [88,92,75,91,85];
for(let score of scores){
    console.log(score);
}

for (let i =1; i<=10;i++){
    if(i === 7){
        break; // stop the loop completely
    }
    console.log(i);
}

let words = ["cat","elephant","kdogs","hippotamus","änt"];
for ( let word of words){
    if (word.lenght < 5) {
    continue; // skip the iteration
    }
    console.log(word);
}