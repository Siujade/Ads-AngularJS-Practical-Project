app.directive('ngActive', ['$route', function($route) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.bind('click', function() {
                var element =  $( this );
                element.parent().find( ".active" ).removeClass('active');
                element.attr('class', 'active');
            });
        }
    };
}]);
