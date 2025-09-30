// 1. EASY WAY = window prompt
// 2.PROFESSIONAL WAY = html textbox
/* 
 1.
 let username;
 username=window.prompt("what's your name?");
 console.log(username);
*/


//2.
let username;

document.getElementById("btn").onclick=function(){
    username=document.getElementById("tt").value;
    document.getElementById("myh1").textContent=`Hello ${username}!!!`;
    console.log(username);
}

 