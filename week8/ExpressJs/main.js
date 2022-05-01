var express = require('express')
var app = express()
var fs = require("fs");
var session = require('express-session');


//body parse and reflect thee same
app.use(express.json());

app.use(logger)


//for auto req handel 
app.use(express.static("public"));



app.use(session({
  secret: 'keyboard cat',
  saveUninitialized: true,
	// resave: false
 }))


app.get("/", function (req, res) {
	//  first check user login
	// than allow view todo
	if(req.session.isLoggedIn){
		console.log("login true")
		res.redirect("/todo.html")
	}
  else{
	  res.redirect("/login.html");  
	}
})

app.use("/logout",(req,res)=>{
	req.session.destroy();
	console.log(req.session)
	res.end("You are logged out");
})

// app.get("/home.css",function(req,res){
// 	var call = routeFile("./todo/home.css", req, res)
// 	call();
// })



// app.get('/', function (req, res) {
// 	var call = routeFile("./todo/home.html", req, res)
// 	call()

// })

// app.get('/about', function (req, res) {
// 	var call = routeFile("./todo/about.html", req, res)
// 	call()
// })

// app.get('/abc.js', function (req, res) {
// 	var call = routeFile("./todo/abc.js", req, res)
// 	call();

// })

app.post('/saveTodo', (req, res) => {
	//  console.log(req.url, req.method ,req.body);
	fs.readFile("./db.txt", "utf-8", function (err, data) {

		var todos = [];
		if (data.length > 0) {
			todos = JSON.parse(data);
		}

		todos.push(req.body);

		fs.writeFile("./db.txt", JSON.stringify(todos), function (err) {
			if (err) {
				res.status(404)
				res.end(err);
			} else {
				res.status(200)
				res.end(JSON.stringify(req.body.id));
			}
		})

	})
})

app.get('/getTodo', function (req, res) {
	// console.log(req.url, req.method);
	fs.readFile("./db.txt", "utf-8", function (err, data) {
		console.log(data);
		res.end(data);
	})
})


app.post('/login', function (req,res) {
	var username = req.body.username;
	var password = req.body.password;
	
	readUsers(function (err, users){
    
		if (err) {
			res.status(404);
			res.end("some error fetching data");
		}
		else {
			var foundUser = users.filter(function(user)
			{
				if (user.username === username && user.password === password) {
					return true;
			  }
			})

		if (foundUser.length) {
				req.session.isLoggedIn =true;
        res.status(200)
				res.end("You are now logging in.")
			}
		else{
				res.status(404)
				res.end("No login found")
		}

		}
	})
});

function readUsers(abc) {
	fs.readFile("db.txt", "utf-8", function (err, data) {
		if (err) {
			abc(err, null);
		} else {
			var users = JSON.parse(data);
			abc(null, users);
		}
	})
}



function logger(req, res, next) {
	console.log(req.method, req.url)
	next()
}

// app.delete('/del',function(req,res){
// 	console.log(req.url, req.method);
// 	fs.readFile("./db.txt", "utf-8", function (err, data) {
//     var todos = data.filter(function(item){
// 			if(item.id !== req.body.id){
// 				return item;
// 			}

// 		fs.writeFile("./db.txt", JSON.stringify(todos), function (err) {
// 				if (err) {
// 					res.end(err);
// 				} else {
// 					res.end();
// 				}
//       })

// 		})
// 	})
// 	// res.end();
// })


app.listen(3000, () => {
	console.log(`Example app listening at 3000`)
})



//...single function for file handle
function routeFile(file, req, res) {
	return function () {
		// console.log(req.url, req.method)
		fs.readFile(`${file}`, "utf-8", function (err, data) {

			if (err) {
				res.end("Error reading file");
			} else {
				res.end(data);
			}
		})
	}
}


