var dupl=[1,2,3,3,4,5,4,5,5,6,7,7];
document.write(dupl+"<br>")
console.log(dupl)
dupl.sort();
var gud=[];
var k=0;
for (let i = 0; i < dupl.length-1; i++) {
    if (dupl[i]!=dupl[i+1]) {
        gud[k++]=dupl[i]
    }
    
}
document.write(gud);
console.log(gud);