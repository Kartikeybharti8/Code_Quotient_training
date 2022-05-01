var userNameNode = document.getElementById("username");
var passWordNode = document.getElementById("password");
var loginButton = document.getElementById("login");

loginButton.addEventListener("click", function () {
  if (userNameNode.value && passWordNode.value) {
    var request = new XMLHttpRequest();
    request.open("post", "/login");
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify({ username: userNameNode.value, password: passWordNode.value }));

    request.addEventListener("load", function () {
      if (request.status === 200) {
        window.location.href = '/'
        console.log(request.responseText);

      } else {
        console.log(request.responseText);
      }

    })
  }else {
    console.log("entries missing")
  }

})
