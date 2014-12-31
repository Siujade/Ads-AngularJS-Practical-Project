var app = angular.module('adsSystem', ['ngRoute', 'ngResource', 'angularUtils.directives.dirPagination']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: "LoadAllAddsCtrl",
                templateUrl: "./templates/home.html"
            })
            .when('/login', {
                controller: "MainCtrl",
                templateUrl: "./templates/login.html"
            })
            .when('/register', {
                //controller: "Questions",
                templateUrl: "./templates/register.html"
            })
            .otherwise({redirectTo: '/'});
    }
]);