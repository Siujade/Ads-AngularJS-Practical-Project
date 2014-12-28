var app = angular.module('adsSystem', ['ngRoute', 'ngResource']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: "LoadAllAddsCtrl",
                templateUrl: "./templates/home.html"
            })
            .when('/choice', {
                controller: "Questions",
                templateUrl: "./templates/question-choice.html"
            })
            .when('/score', {
                controller: "Questions",
                templateUrl: "./templates/scoreboard.html"
            })
            .otherwise({redirectTo: '/'});
    }

]);