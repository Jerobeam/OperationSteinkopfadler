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