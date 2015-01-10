app.controller('MainCtrl', function ($scope, $location, $route, userData, publicData, adsUserData) {
    $scope.isLogged = false;
    $scope.currentUser = '';
    $scope.msgBox = {};
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

    $scope.getAdData = function(id) {
        $scope.selectedAdData = adsUserData.getAdById(id);
        location.href="#/edit";
    };

    $scope.getUserData = function() {
        userData.getData()
            .$promise
            .then(function (data) {
                $scope.userData = {
                    name : data.name,
                    email : data.email,
                    phoneNumber : data.phoneNumber,
                    townId : data.townId,
                    imageDataUrl : data.imageDataUrl,
                    changeImage : false
            };

                $scope.userPasswords = {
                    oldPassword : '',
                    newPassword : '',
                    confirmPassword : ''
                }
            });
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

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.$watch(function () {
        return sessionStorage;
    }, function() {
        $scope.currentUser = sessionStorage.username || '';
        $scope.isLogged = sessionStorage.length;
    }, true);

    $scope.changeHeading = function (heading) {
        $scope.loc = 'Ads - ' + heading;

         //Remove these to navigate back to the last selected category and town.
        $scope.selectedCategoryId = '';
        $scope.selectedTownId = '';
    };
});
