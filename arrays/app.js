// we hsve three ds:arrays,object,regex
// array is of two types homognus,heteregenus
var a=[55,"sss",null,[888,44.4,[8,7.6]]];
document.write(a +"<br>");
// we  can use array instance of array to intiliase
var aa=new Array();
aa[0]=55;
aa[1]=88;
document.write(aa  +"<br>");
var aaa=new Array(11000,55.3,'s'  +"<br>"); //constructor
document.writeln(aaa  +"<br>");
aaa.pop(9999);
document.writeln(aaa  +"<br>");
aaa.push(85,55855,88);
document.writeln(aaa  +"<br>");

