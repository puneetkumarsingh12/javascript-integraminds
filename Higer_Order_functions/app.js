const a=[11,12,13,14,15,16,17,18,19];
const b=a.filter(function(x1){
if(x1%2==0){
  return x1;
}
})
document.write("the even elements are: "+b);
document.write("<hr>")
