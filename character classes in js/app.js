let email=prompt("write your email");
// let a=email.match(/[abc]/g);
//let a=email.match(/\S/g);
// let a=email.match(/\d/g);
// let a=email.match(/\D/g);
// let a=email.match(/\W/g);
let a=email.match(/a?/g);
// let a=email.match(/a/g);



document.write(a+"<br>");

if(a!=null){
  document.write("Pattern is there... ")
  document.write("<hr> ")
}
else{
  document.write("Pattern is not there... ")
  document.write("<hr> ")
}