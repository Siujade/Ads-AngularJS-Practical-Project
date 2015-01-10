app.controller('UserAdsCtrl', function ($scope, adsUserData, $log) {
    function displayData(data) {
        $scope.data = data;
        $scope.ads = data.ads;
        $scope.myTotalAds = data.numPages * data.ads.length;
    }

    function loadPage() {
        adsUserData.getAll(1, $scope.selectedAdStatus)
            .$promise
            .then(displayData,
            function (error) {
                $log.error(error);
            });
    }

    $scope.$watch('selectedAdStatus', function () {
        loadPage();
    });

    $scope.pageChanged = function (newPage) {
        adsUserData.getAll(newPage, $scope.selectedAdStatus)
            .$promise
            .then(displayData);
    };

    $scope.createAdd = function () {
        var data = {
            title: $scope.title,
            text: $scope.text,
            imageDataUrl: $scope.imgUrl,
            categoryId: $scope.category.id,
            townId: $scope.town.id
        };

        adsUserData.create(data)
    };

    $scope.editAd = function (id, action, ad) {
            adsUserData.edit(id, action, ad);
        console.log(ad);
    };

    $scope.deleteAd = function (id) {
        adsUserData.delete(id);
    };
});















