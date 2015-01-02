app.controller('MainCtrl', function($scope) {
    $scope.towns = []; //tODO
    $scope.isLogged = false;
    $scope.currentUser = '';
    $scope.loc = 'Ads - Home';
    $scope.pagination = {
        current: 1
    };

    $scope.removeClass = function(){
       var elem = $('.active');
        elem.attr('class', '');
    };

    $scope.$watch(function () {
        return sessionStorage;
    }, function (newVal, oldVal) {
        $scope.currentUser = sessionStorage.username || '';
        if(sessionStorage.length) {
            $scope.isLogged = true;
        }
    }, true);

    $scope.changeHeading = function(heading) {
        $scope.loc = heading;
    };
});
