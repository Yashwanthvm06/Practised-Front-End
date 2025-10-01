const age=document.getElementById("age");
const check=document.getElementById("check");
const myh1=document.getElementById("myh1");
let agecheck=0;

check.onclick=function(){
    agecheck=Number(age.value);

    if(agecheck >= 18 && agecheck <=100){
        myh1.textContent="you can vote at this age";
    }
    else if(agecheck > 100 || agecheck <= 0){
        myh1.textContent="you can't vote check the age";
    }
    else{
    myh1.textContent="your age is not right vote :  (";
        }
}