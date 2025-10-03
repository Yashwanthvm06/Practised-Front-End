let username=window.prompt("whats your name?");

//without method chaining

/*username=username.trim();
 let letters=username.charAt(0);
 letters=letters.toUpperCase();

 let otherletters=username.slice(1);

 otherletters=otherletters.toLowerCase();

 username=letters+otherletters;

console.log(username);
*/


//with method chaining

username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);