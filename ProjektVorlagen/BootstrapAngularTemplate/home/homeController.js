angular.module("kawaiiapp")
    .controller("homeController", function (userService) {

        var self = this;

        self.onAlarmClick = alarm;
        self.testFn = testFn;
        self.user = {
            name: "",
            age: ""
        };
        self.users = userService.getUsers();

        //function definitions
        function testFn() {
            console.log("testFn called");
        }

        function alarm() {
            console.log("alarm");
            alert("penis!");
        }
    });