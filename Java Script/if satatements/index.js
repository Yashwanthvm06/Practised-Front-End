const btn=document.getElementById("btn");
const dice1=document.getElementById("dice1");
const dice2=document.getElementById("dice2");
const dice3=document.getElementById("dice3");
const min=1;
const max=6;
 let rn1;
 let rn2;
 let rn3;
btn.onclick=function(){
    rn1=Math.floor(Math.random()*(max-min)+min);
    rn2=Math.floor(Math.random()*(max-min)+min);
    rn3=Math.floor(Math.random()*(max-min)+min);
    dice1.textContent=rn1;
    dice2.textContent=rn2;
    dice3.textContent=rn3;
}