// Task 1: Creating Arrays
// 1. Create an array named students containing three student names using array literal
// notation.
// 2. Create an array named grades containing three numeric values using the Array
// constructor.
// 3. Create an array named isPresent using Array.of() containing three boolean values.

let students = ["Michael", "Hiori", "Sarah"];
let grades = [ 23, 44, 54, ];
let isPresent = Array.of(true,false,true);

// Task 2: Accessing and Updating Elements
// 1. Display the first student name from the students array.
// 2. Update the second grade value in the grades array.
// 3. Display the updated grades array.

console.log(students[0]);
grades[1] = 45;
console.log(grades[1] = 45);

// Task 3: Array Modification Methods
// 1. Add a new student to the end of the students array using push().
// 2. Remove the last value from the isPresent array using pop().
// 3. Display both arrays after modification.

students.push("Samuel");
isPresent.pop(2);

console.log(students);
console.log(isPresent);


// 1. Use a for loop to display all student names.
// 2. Use forEach() to display each grade.
// 3. Use a for...of loop to display attendance values.
// 4. Use the entries() method to get an iterator for the students array and print each index
// and element pair.

for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

grades.forEach(grade => console.log(grade));

for (const element of isPresent) {
    console.log(element);
}

for (let index = 0; index < students.length;index++){
    console.log(students[index]);
}

//  Create a new array named passedGrades that includes grades greater than or equal to 50
// using filter().
// 2. Create a new array named doubledGrades by doubling each grade using map().
// 3. Display both new arrays

let passedGrades = grades.filter (grades => grades >= 50);
let doubledGrades = grades.map(grades => grades * 2);
console.log("Passed Grades:", passedGrades);
console.log("Doubled Grades:",doubledGrades);