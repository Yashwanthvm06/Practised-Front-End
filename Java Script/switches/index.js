const myh1=document.getElementById("myh1");
const mylabel=document.getElementById("mylabel");
const input=document.getElementById("input");
const sub=document.getElementById("sub");

sub.onclick=function(){
let no=Number(input.value);
switch(no){
    case 1:
        myh1.textContent="today is Monday";
        break;
    case 2:
        myh1.textContent="today is Tuesday";
        break;
    case 3:
        myh1.textContent="today is wednesday";
        break;
    case 4:
        myh1.textContent="today is Thursday";
        break;
    case 5:
        myh1.textContent="today is friday";
        break;
    case 6:
        myh1.textContent="today is Saturday";
        break;
    case 7:
        myh1.textContent="today is Sunday";
        break;
    default:
        myh1.textContent="Enter proper date";
        break;
}
}