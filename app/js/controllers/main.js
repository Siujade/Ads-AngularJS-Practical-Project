app.controller('MainCtrl', function ($scope, userData, publicData) {
    $scope.isLogged = false;
    $scope.currentUser = '';
    $scope.loc = 'Ads - Home';
    $scope.pagination = {current: 1};
    $scope.categories = publicData.getAllCategories();
    $scope.towns = publicData.getAllTowns();
    $scope.selectedCategoryId = "";
    $scope.selectedTownId =  "";
    $scope.selectedAdStatus = "";

    $scope.logout = function () {
        $scope.loc = 'Ads - Home';
        userData.logout();
    };

    $scope.sortByStatus = function(status){
        $scope.selectedAdStatus = status;
    };

    $scope.sortByCategory = function(category) {
        $scope.selectedCategoryId = category;
    };

    $scope.sortByTown = function(town) {
        $scope.selectedTownId = town;
    };

    $scope.$watch(function () {
        return sessionStorage;
    }, function() {
        $scope.currentUser = sessionStorage.username || '';
        $scope.isLogged = sessionStorage.length;
    }, true);

    $scope.changeHeading = function (heading) {
        $('.active').attr('class', '');

        $scope.loc = heading;
    };
});
