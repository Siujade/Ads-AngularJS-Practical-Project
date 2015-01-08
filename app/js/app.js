var app = angular.module('adsSystem', ['ngRoute', 'ngResource', 'angularUtils.directives.dirPagination']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: "LoadResourcesCtrl",
                templateUrl: "./templates/home.html"
            })
            .when('/login', {
                controller: "UsersCtrl",
                templateUrl: "./templates/login.html"
            })
            .when('/register', {
                controller: "UsersCtrl",
                templateUrl: "./templates/register.html"
            })
            .when('/profile', {
                controller: "UsersCtrl",
                templateUrl: "./templates/profile.html"
            })
            .when('/user',{
                controller: "UserAdsCtrl",
                templateUrl: "./templates/home.html"
            })
            .when('/my-ads', {
                controller: "UserAdsCtrl",
                templateUrl: "./templates/my-ads.html"
            })
            .when('/new-ad', {
                controller: "UserAdsCtrl",
                templateUrl: "./templates/add-creation.html"
            })
            .when('/edit', {
                controller: "UserAdsCtrl",
                templateUrl: "./templates/add-edit.html"
            })
            .otherwise({redirectTo: '/'});
    }
]);