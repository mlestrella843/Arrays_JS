/*Define an array named myArray with the following element 3,6,8,10,12  
and print the output in reverse order on the browser console for the 
above given array the output should be 12,10,8,6,3*/


let array = [12, 10, 8, 6, 3];

array.reverse();
console.log(array);

/*
Q2 
Define an object called Person to store the following information 
Name= Torne, age = 34. Torne has a honda car, the car price is 30K 
and it is 2019 version. Print the name and car version of the Person
on the browser console */

var person = {
    name: "Torne",
    age: 34,
    car: "Honda",
    price_car: "30k",
    version_car: 2019,
}

function print(person){
    console.log("Name of person: " + person.name + " , " +  " Version of Car: " + person.version_car);
}

print(person);


/*
Q3
Write a program that can calculate the sum and average of any given array of elements.
For example, if you have an array of 1,4,3,2,3 then the output should be 13 and 2.6
use one of the built-in array methods */


let array1 = [1,4,3,2,3];

let sum = 0, average = 0;

array1.forEach(function(element){
   sum = sum + element; 
});

average = sum / array1.length; 
console.log("The average is: " + average);

/*
Q4
Write  JS code to create an empty array named Employee. Create a function to add a new element 
into an empty array you created. Write a code to display your Employee array with its new elements(data) 
inserted from your function. Sample array data that you can insert   (Taniya, Hie, Li, Nina ) */


let arr_empl = [];

function add_element(name){
for (let index = 0; index < 4; index++) {
    var name = prompt("enter yor name: ");
    arr_empl.push(name);   
}
console.log(arr_empl);
}

add_element(name);