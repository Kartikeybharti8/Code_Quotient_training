var listsNode = document.getElementById("lists");
var saveNode = document.getElementById("save");
var inpNode = document.getElementById("inp");
var logOutNode = document.getElementById("logout");

saveNode.addEventListener("click", function () {
  if (inpNode.value) {
    var request = new XMLHttpRequest();
    request.open("post", "/saveTodo");
    request.setRequestHeader("Content-type", "application/json");
    var listNode = { id: Date.now(), todo: inpNode.value }
    request.send(JSON.stringify(listNode));
    console.log(request.responseText)
    request.addEventListener("load", function () {
      var item = document.createElement("li");
      item.innerHTML = listNode.todo + " : Id = "+listNode.id;
      var cancel = document.createElement("div");
      cancel.className = "close";
      cancel.innerHTML = "x";

      item.appendChild(cancel);
      cancel.onclick = cancelQuestion();

      listsNode.appendChild(item);
      inpNode.value = "";
    })
  }
})

logOutNode.addEventListener("click",function(){
  var request = new XMLHttpRequest();
  request.open("get", "/logout");
  request.send();
  request.addEventListener("load",()=>{
    console.log(request.responseText);
    window.location.href = '/'
  })
})

function load() {

  var request = new XMLHttpRequest();
  request.open("get", "/getTodo");
  request.send();
  request.addEventListener("load", function () {
    var todos = JSON.parse(request.responseText);
    todos.forEach(function (task) {

      var item = document.createElement("li");
      

      item.innerHTML = task.todo +" : Id = "+task.id;

      var cancel = document.createElement("div");
      cancel.className = "close";

      close.onclick = cancelQuestion();

      cancel.innerHTML = "x";


      item.appendChild(cancel);
      // cancel.onclick = cancelQuestion()
      listsNode.appendChild(item);
      inpNode.value = "";
    })
  })
}


load();
 
 
  function cancelQuestion() {
    return function () {
      console.log(this.parentElement.childNodes[0]);
      // this.parentElement.style.display = 'none';
      // var todos=getTodos();
      // var delNodeId = todos.forEach(findTodoNode(item,this.value));
      // var xhr = new XMLHttpRequest();
      // xhr.open("DELETE", "/del", true);
      // xhr.setRequestHeader("Content-type", "application/json");

      // xhr.send(JSON.stringify({id:delNodeId}));
      // // xhr.onload = function () {
      // // }
    }
  }
// function getTodos()
// {

// }

// function findTodoNode(item,value){
//  if(item.id === value){
//    return item;
//  }
// }
