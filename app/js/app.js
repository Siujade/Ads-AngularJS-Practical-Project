var app = angular.module('adsSystem', ['ngRoute', 'ngResource', 'angularUtils.directives.dirPagination']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: "LoadAllAddsCtrl",
                templateUrl: "./templates/home.html"
            })
            .when('/login', {
                controller: "Users",
                templateUrl: "./templates/login.html"
            })
            .when('/register', {
                controller: "Users",
                templateUrl: "./templates/register.html"
            })
            .otherwise({redirectTo: '/'});
    }
]);