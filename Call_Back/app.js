function T(name,callback){
  console.log("hi:my name is "+name);
  callback()
}
function T2(){
  console.log("Call back ");

}
T("radhe",T2);
