/*let username;

 while(username === "" || username === null){
    username=window.prompt("Enter your name")
 }

 console.log(`Hello ${username}!!`);
 */

 let loggedIn=false;
let username;
let password;

while(!loggedIn){
    username=window.prompt("Enter your username");
    password=window.prompt("Enter your password");
  if (username !== null) username = username.trim();
    if (password !== null) password = password.trim();
    if(username ==="myUsername" && password=== "myPassword"){
        loggedIn=true;
        console.log("You logged in succefully :)");
    }
    else{
        console.log("Check the username and pasword :(");
    }

}