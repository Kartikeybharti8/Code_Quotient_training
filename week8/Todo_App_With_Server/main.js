var express = require('express')
var app = express()
var fs = require("fs");
var session = require('express-session');

//setting view engine for ejs
app.set('view engine', 'ejs');
app.set("views", "view-files")

//body parse for json data and reflect the same
app.use(express.json());

//body parser for form data
app.use(express.urlencoded())

//logger for every request call
app.use(logger)

//for auto req handel from a folder
app.use(express.static("public"));


//setting the session var for a req call
app.use(session({
	secret: 'keyboard cat',
	saveUninitialized: true,
	// resave: false
}))


app.get("/", function (req, res) {

	//  first check user login
	// than allow view todo

	if (req.session.isLoggedIn) {

		readTodos(function (todos) {

			console.log("login true");

			res.render('home.ejs', { data: todos })

		})

	}

	else {

		res.redirect("/login.html");

	}

})

app.post("/todo", function (req, res) {

	readTodos(function (todos) {

		todos.push(req.body)

		saveTodos(todos, function (err) {

			if (err) {

				res.end(err);

			}

			else {

				res.redirect("/");

			}

		})

	})

})

app.post("/todo/fav/:title", function (req, res) {
	
	var title = req.params.title;
	
	console.log(title)
	
	readTodos(function (todos) {

		todos.forEach(function (item) {

			if (item.todo === title) {
      
			  if(item.isfav === "👍"){
			
					item.isfav = "";
			
				}
				else{
           
			  	item.isfav = "👍";      

				}
			
			}

		})
		
		saveTodos(todos, function () {
		
			res.redirect('/');
		
		})

	})

})

function saveTodos(todos, call) {

	fs.writeFile("./todo.txt", JSON.stringify(todos), function (err) {

		if (err) {

			call(err);

		}
		else {

			call();

		}

	})

}

function readTodos(call) {

	fs.readFile("todo.txt", "utf-8", function (err, data) {

		if (err) {

			call([]);

		} else {

			var users = JSON.parse(data);

			call(users);

		}

	})

}


app.post('/login', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;

	readUsers(function (err, users) {

		if (err) {
			res.status(404);
			res.end("some error fetching data");
		}
		else {
			var foundUser = users.filter(function (user) {
				if (user.username === username && user.password === password) {
					return true;
				}
			})

			if (foundUser.length) {
				//just sent session login to true.
				req.session.isLoggedIn = true;
				res.status(200)
				res.end("You are now logging in.")
			}
			else {
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

app.use("/logout", (req, res) => {

	req.session.destroy();

	res.end("You are logged out");

})



app.listen(3000, () => {

	console.log(`Example app listening at 3000`)

})




