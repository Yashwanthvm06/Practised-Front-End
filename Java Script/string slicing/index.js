
const myname = "yashwanth madhavan";

/*let firstname=myname.slice(0,9);

let lastname=myname.slice(10,18);

let fc=myname.slice(0,1);

console.log(firstname);
console.log(lastname);
console.log(fc);*/
let fname = myname.slice(0, myname.indexOf(" "));
let lname = myname.slice(myname.indexOf(" ") + 1);

console.log(fname);
console.log(lname);

const email="yash@gmail.com";
 let un=email.slice(0,email.indexOf("@"));
 let ex=email.slice(email.indexOf("@")+1);
  console.log(un);
  console.log(ex);