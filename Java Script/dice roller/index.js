function roll(){

    const noofdice=document.getElementById("noofdice").value;
    const diceresult=document.getElementById("diceresult");
    const diceimages=document.getElementById("diceimages");
    const values=[];
    const images=[];

    for(let i=0;i<noofdice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);images.push(`<div style="display:inline-block; text-align:center; margin:5px;">
                <img src="img/${value}.jpg" style="width:80px; height:80px;">
                <div style="font-size:20px; font-weight:normal;">dice no ${i+1}</div>
            </div>`);
   
    }
    diceresult.textContent=`dice values :${values.join(", ")}`;
    diceimages.innerHTML=images.join(' ');
}