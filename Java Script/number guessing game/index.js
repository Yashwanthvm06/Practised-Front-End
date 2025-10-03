const min=1;
const max=100;
const answer=Math.floor(Math.random() * (max-min+1))+min;

let attempts=0;
 let guess;
 let running=true;

while(running){

    guess=window.prompt(`Guess the number between ${min} and ${max}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert(`please guess and enter the valid number`);
    }
    else if(guess<min || guess>max){
        window.alert(`please guess the number between the range`)
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("TOO LOW! GUESS AGAIN WITH GREATER NUMBER :(");
        }
        else if(guess>answer){
            window.alert("TOOO HIGH! GUESS LOW NUMBER :|");
        }
        else{
            window.alert(`Succesfully WON in ${attempts} attempt(s) :)`);
            running=false;
            
        }
    }
}