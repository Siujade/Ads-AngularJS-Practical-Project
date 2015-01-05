app.directive('ngHeading', ['$route', function($route) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            scope.changeHeading(attrs.ngHeading);
        }
    };
}]);
