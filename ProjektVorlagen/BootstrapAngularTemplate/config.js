angular.module("kawaiiapp").config(function ($stateProvider, $urlRouterProvider) {
    //hier kommen unsere Routendeklarationen hin

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "views/home.html",
            controller: "homeController as home"
        })
        .state("login", {
            url: "/login",
            templateUrl: "views/login.html"
        });
});