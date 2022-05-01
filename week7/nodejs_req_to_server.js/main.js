var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {
	if (req.method === "GET") {
		
		if (req.url === "/") {
		  var call = routeFile("./home.html",req,res);
			call()
		}
		else if (req.url === "/about") {
			var call = routeFile("./about.html",req,res);
			call()
		}
		else if(req.url === "/abc.js") {
			var call = routeFile("./abc.js",req,res);
			call()
		}
	
	} else {
		res.end("invalid request")
	}

});

server.listen(3000, function () {
	console.log("server started at 3000")
})

//...single function for file handle
function routeFile(fileName,req,res){
	return function(){
		console.log(req.url,req.method)
		fs.readFile(`${fileName}`, "utf-8", function (err, data) {
				if (err) {
					res.end("Error reading file");
				} else {
					res.end(data);
				}
			})
	}
}
