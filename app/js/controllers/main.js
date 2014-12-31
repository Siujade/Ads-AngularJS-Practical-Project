app.controller('MainCtrl', function($scope) {
    $scope.logedIn = false;
    $scope.towns = $scope.data.t;
    $scope.loc = 'Ads - Home';
    $scope.pagination = {
        current: 1
    };
    $scope.changeHeading = function(heading) {
        $scope.loc = heading;
    }
});
