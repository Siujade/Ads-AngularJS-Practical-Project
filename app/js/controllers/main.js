app.controller('MainCtrl', function($scope) {
    $scope.logedIn = false;
    $scope.towns = []; //tODO
    $scope.loc = 'Ads - Home';
    $scope.pagination = {
        current: 1
    };

    $scope.changeHeading = function(heading) {
        $scope.loc = heading;
    }
});
