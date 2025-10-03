/*
function happyBirthday(username,age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday to ${username}!`);
    console.log(`You are ${age} years old!`);
}

happyBirthday("yash",19);
happyBirthday("sam",20);
*/
/*
function add(x,y){
    let result=x+y;
    return result;
}
let answer = add(2,3);
console.log(answer);
*/
function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
function div(x,y){
    return x/y;
}
console.log(add(2,5));
console.log(sub(2,5));
console.log(mul(2,5));
console.log(div(2,5));

function eve_odd(number){
   /* if(number%2===0) {
        return true;
    }
    else{
        return false;
    }*/
   return number%2===0? true:false;
}

console.log(eve_odd(8));

function valid_email(email){
    return email.includes("@")? true:false;
}
console.log(valid_email("Yash@gmail.com"));