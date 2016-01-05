angular.module("app").config(function ($stateProvider, $urlRouterProvider) {
    //hier kommen unsere Routendeklarationen hin

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "views/home.html",
            controller: "homeController as home"
        })
});