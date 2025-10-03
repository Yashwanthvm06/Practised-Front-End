/*let numbers=[1,2,3,4,5];

let max=Math.max(...numbers);
console.log(max);
console.log(numbers);

let username="yashwanth";
let letters=[...username].join("-");
console.log(letters);
*/

let fruits=["Apple","Banana","Grapes"];
let vegetable=["Brinjal","Potato","Carrot"];

let foods=[...fruits,...vegetable,"Milk","Eggs"];
console.log(foods);