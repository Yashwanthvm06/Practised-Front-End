/*const food1="pizza";
const food2="Idly";
const food3="Dosa";
const food4="Burger";

function openfridge(...foods){
    console.log(...foods);
}
function getfood(...foods){
    return foods;
}

//openfridge(food1,food2,food3,food4);
const foods=getfood(food1,food2,food3,food4);
console.log(foods);

function sum(...numbers){
    let result=0;
    for(let number of numbers){
        result+=number;
    }
    return result;
}

function getavg(...numbers){
    let result=0;
    for(let number of numbers){
        result+=number;
    }
    return result/numbers.length;
}

let total=sum(1,2,3,4,5);
console.log(`your total is $${total}`);
let avg=getavg(1,2,3,4,5);
console.log(`your average is $${avg}`);
*/

function combinestring(...strings){
    return strings.join(" ");
}

const fullname=combinestring("Yashwanth","V M");
console.log(fullname);