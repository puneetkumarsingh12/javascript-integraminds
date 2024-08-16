//constructors in javascript
class School{
  
  // constructor(){
  //   document.write("im student 0"+"<hr>");


  // }
  constructor(rollno,age){
    this.rollno=22;
    this.age=33;
  }
   c(){
    
    document.write("roll no is "+this.rollno+"<br>");
    document.write("age  is "+this.age);
  }

}
//Parametrised 
let school=new School;
school.c();
