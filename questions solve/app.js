// write a js program where a given number is even or odd

let a=prompt("give a number");
if(a==0){
  document.write("undefined")

}
if(a%2==0){
  document.write("even")
}
else{
  document.write("odd")

}
// factorial of given number
 a=prompt("give a number");
if(a==1 || a==0){
  document.write("1"); }

let bus=1;
while(a-1>0){

bus=a*(a-1)*bus;
a=a-2;
}
document.write(bus);
