function WebSocketTest()
         {
            if ("WebSocket" in window)
            {
               
               // Erstellt einen Websocket
               var ws = new WebSocket("ws://localhost:8001");
				
               ws.onopen = function()
               {
                  // Senden von Nachricht zur überprüfung der Verbindung
                  ws.send("Hallo Sever");
                  console.log("Nachricht wird gesendet");
               };
				
               ws.onmessage = function (evt) 
               { 
                  var received_msg = evt.data;
                  console.log("Nachricht über WebSocket erhalten");
				  document.getElementById("websocketMessageContainer").innerHTML = evt.data;
				  document.getElementById("bannerContainer").src = "http://localhost/php/generated/img.jpg"
               };
				
            }
            
            else
            {
               console.log("WebSocket wird vom Browser nicht unterstützt!");
            }
         }
		 
		 
	//Führe Funktion aus 
	WebSocketTest();