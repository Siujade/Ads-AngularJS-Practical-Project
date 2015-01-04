app.controller('MainCtrl', function($scope, userData) {
    $scope.towns = []; //tODO
    $scope.isLogged = false;
    $scope.currentUser = '';
    $scope.loc = 'Ads - Home';
    $scope.pagination = {
        current: 1
    };

    $scope.logout = function(){
        $scope.loc = 'Ads - Home';
        userData.logout();
    };

    $scope.$watch(function () {
        return sessionStorage;
    }, function (newVal, oldVal) {
        $scope.currentUser = sessionStorage.username || '';
        $scope.isLogged = sessionStorage.length;
    }, true);

    $scope.changeHeading = function(heading) {
        $('.active').attr('class', '');

        $scope.loc = heading;
    };
});
