angular.module("kawaiiapp")
    .factory("userService", function () {
        var users = [
            {
                name: "Peter",
                age: 21
            },
            {
                name: "Monika",
                age: 86
            },
            {
                name: "Tom",
                age: 39
            }
        ];

        function getUsers() {
            //Hier wird später mit einem Server per AJAX
            //kommuniziert und die User abgerufen.
            //Da wir das noch nicht gaben, geben wir ein Testarray
            //mit Usern zurück.
            return users;
        }

        function addUser(name, age){
            //fügt neuen Benutzer hinzu
            console.log("neuen Benutzer hinzugefügt");
        }

        return {
            getUsers: getUsers,
            addUser: addUser
        };
    });