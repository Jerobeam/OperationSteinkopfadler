var ws = require("nodejs-websocket")
 
// Websockets
var server = ws.createServer(function (conn) {
	console.log("New connection")
	conn.on("text", function (str) {
		console.log("Received "+str)
		var date = new Date();
		conn.sendText("Systemzeit des Servers bei Abfrage der HTML Datei:" + date);
	})
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
	})
}).listen(8001)



//DB Connection
var express  = require("express");
var mysql      = require('mysql');
var app = express();

//Enable Cross Origin Access
//Add headers
app.use(function (req, res, next) {
	//address, which should access the server
	//Use this line if you start index.html over a server
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');

	//Use this line if you open index.html in your browser without a server
	//res.setHeader('Access-Control-Allow-Origin', 'null');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

//create DB connection
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'db'
});

connection.connect(function(err){
	//log if connection was successful
	if(!err) {
		console.log("Database is connected");
	} else {
		console.log("Error connecting database");
	}
});

app.get("/getUser/:username/:password",function(req,res){
	//execute SQL query with connection
	connection.query("SELECT * FROM users WHERE username LIKE '" + req.params.username
		+ "' AND password LIKE '" + req.params.password + "'", function(err, rows) {
		//if query successful, send OK (200) and the results of the query in json format
		if (!err){
			res.status(200);
			res.json(rows);
		}
		//if not, send error code (400) and an error message in json format
		else{
			res.status(400);
			res.json({"code": "400" , "status" : "Error in Database-Query"});
		}
	});

});

//listen on port 3000
app.listen(3000);