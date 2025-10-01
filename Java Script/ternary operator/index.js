//let age=16;

//let message = age>=18 ? "you are eligible":"you are not eleigible";
//console.log(message);

//let time=9;

//let greet=time<12?"good morning":"good afternoon";
//console.log(greet);

const sub=document.getElementById("sub");
const amount=document.getElementById("amount");

sub.onclick=function(){

    let amo = Number(amount.value);
    let discount=amo>100?10:0;
    myh1.textContent=`the total after discount reduced is : ₹${amo-amo*(discount/100)}`;
}