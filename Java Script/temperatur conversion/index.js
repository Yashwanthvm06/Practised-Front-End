const ip=document.getElementById("ip");
const toc=document.getElementById("toc");
const tof=document.getElementById("tof");
const res=document.getElementById("res");

let temp;

function convert(){
    if(tof.checked){
        temp=Number(ip.value);
        temp=((9/5)*(temp))+32;
        res.innerHTML = `Temperature after converting to Fahrenheit: 
            <span style="color:blue;">${temp.toFixed(1)}</span> °F`;
    }
    else if(toc.checked){
        temp=Number(ip.value);
        temp=(5/9)*((temp)-32);
        res.innerHTML = `Temperature after converting to Celsius: 
            <span style="color:green;">${temp.toFixed(1)}</span> °C`;
    }
    else{
        res.textContent = "⚠️ Select a unit";
        res.style.color = "red";
    }
}