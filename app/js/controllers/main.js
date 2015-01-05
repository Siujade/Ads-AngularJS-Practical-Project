app.controller('MainCtrl', function ($scope, userData, publicData) {
    $scope.isLogged = false;
    $scope.currentUser = '';
    $scope.loc = 'Ads - Home';
    $scope.pagination = {current: 1};
    $scope.categories = publicData.getAllCategories();
    $scope.towns = publicData.getAllTowns();
    $scope.selectedCategoryId = "";
    $scope.selectedTownId =  "";

    $scope.logout = function () {
        $scope.loc = 'Ads - Home';
        userData.logout();
    };

    $scope.sortByCategory = function(category) {
        $scope.selectedCategoryId = category.id;
    };

    $scope.sortByTown = function(town) {
        $scope.selectedTownId = town.id;
    };

    $scope.$watch(function () {
        return sessionStorage;
    }, function (newVal, oldVal) {
        $scope.currentUser = sessionStorage.username || '';
        $scope.isLogged = sessionStorage.length;
    }, true);

    $scope.changeHeading = function (heading) {
        $('.active').attr('class', '');

        $scope.loc = heading;
    };
});
