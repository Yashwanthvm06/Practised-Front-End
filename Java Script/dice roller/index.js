function roll(){

    const noofdice=document.getElementById("noofdice").value;
    const diceresult=document.getElementById("diceresult");
    const diceimages=document.getElementById("diceimages");
    const values=[];
    const images=[];

    for(let i=0;i<noofdice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="img/${value}.jpg" style="width:80px;height:80px;margin:5px;">`)    
    }
    diceresult.textContent=`dice:${values.join(", ")}`;
    diceimages.innerHTML=images.join(' ');
}