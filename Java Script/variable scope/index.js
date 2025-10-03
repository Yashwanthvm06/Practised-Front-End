
/*
//local scopee
function fn1(){
    let x=1;
    console.log(x);
}
function fn2(){
    let x=2;
    console.log(x);
}
    fn1();
    fn2();
*/

/* if we have both local and global variables have same name then 
    local has priorittttyyyyy */
//global scopeee
let x=3;

function fn1(){
    console.log(x);
}
function fn2(){
    console.log(x);
}
    fn1();
    fn2();