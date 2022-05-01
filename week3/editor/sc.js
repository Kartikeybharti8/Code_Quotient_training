var t1=document.getElementById("t1");
var t2=document.getElementById("t2");
var langOpt=document.getElementById("language")
var compile = document.getElementById("compile");

var obj={
    python : "0" , js : "4" , c : "7" , cpp : "77" , Java : "8"
    };

// var langId=obj[langOpt.value];
// var exeCode = t1.value;

 

compile.addEventListener("click",function()
{
   console.log(t1.value);
  var data = { code:t1.value , langId:obj[langOpt.value]};
  var req = new XMLHttpRequest;
  req.open("POST","https://codequotient.com/api/executeCode");

  console.log(data,"not stringyfy dta");
  console.log(JSON.stringify(data),"stringyfy data")
  
//setting the req header as application/json type------------------------------

  req.setRequestHeader("content-type","application/json");
  
  req.send(JSON.stringify(data));

  req.addEventListener("load",function(event)
    {
        var response = event.target.responseText;
        response=JSON.parse(response);
        console.log(response,"parsed response")
        setTimeout(function(){
          output(response.codeId)}
          ,3000);
    })

  
  });

function output(response)
{
  var req2= new XMLHttpRequest();
  req2.open("GET",` https://codequotient.com/api/codeResult/${response}`);
  req2.send();
  req2.addEventListener("load",function()
  {
    var result = JSON.parse(req2.responseText);
    result = JSON.parse(result.data);
     console.log(result,"parsed data");
    
    t2.value="";
    if(result.output!="")
    {
      t2.value = result.output;
    }
    else{
      t2.value = result.errors;
    }
  })
}
