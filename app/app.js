var app = angular.module('addsSystem', ['ngRoute', 'ngResource']);

app.factory("Post", function($resource) {
    return $resource("/api/posts/:id");
});

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: "PlayerFactory",
                templateUrl: "./templates/player-creation.html"
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