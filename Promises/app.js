var p=new Promise(function(resolve,reject){
  var a=100+800;
  if(a==900){
    resolve(" done")
  }
  else{
    reject(" not done")
  }
})
p.then(function(fromResolve){
document.write("request is"+fromResolve);

})
p.catch(function(fromreject){
  document.write("request is"+fromreject);
  
  })
