const subs=document.getElementById("subs");
const paypal=document.getElementById("paypal");
const visa=document.getElementById("visa");
const mastercard=document.getElementById("mastercard");
const res=document.getElementById("res");
const subsresult=document.getElementById("subsresult");
const paymentresult=document.getElementById("paymentresult");

res.onclick=function(){
    if(subs.checked){
        subsresult.textContent="you are subscribed:)";
    }
    else{
        subsresult.textContent="you are not subscribed";
    }

    if(paypal.checked){
        paymentresult.textContent="you are paying via paypal";
    }
    else if(visa.checked){
        paymentresult.textContent="you are paying via visa";
    }
    else{
        paymentresult.textContent="you are paying mastercard";
    }
}
