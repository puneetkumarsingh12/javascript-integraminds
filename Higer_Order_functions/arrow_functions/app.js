const a=[11,12,13,14,15,16,17,18,19];
const b=a.filter(x1=>x1%2!=0)

document.write("the even elements are: "+b+" and ");

const a2=[11,12,13,14,15,16,17,18,19];
const b2=a2.filter(x1=>x1%2==0)

document.write("the even elements are: "+b2);
document.write("<hr>")


const a3=[11,12,13,14,15,16,17,18,19];
const b3=a3.map(x1=>x1+2000==0)
document.write(b3);
const a4=[10000,20000,30000,40000,5000];
const totalsalary=a4.reduce(function(x1,x2){
  return x1+x2;
})
document.write("<br>"+totalsalary);
document.write("<hr>");
const a5=[10000,20000,30000,40000,5000];
const totallsalary=a5.reduce((x1,x2)=>x1+x2)
document.write("<br>"+totalsalary);