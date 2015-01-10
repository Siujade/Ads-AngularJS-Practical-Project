app.directive('ngMessage', ['$route', function($route) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            scope.msgBox =  $('#messageBox').messageBox();
        }
    };
}]);
