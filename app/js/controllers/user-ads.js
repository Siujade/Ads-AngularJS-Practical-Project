app.controller('UserAdsCtrl', function($scope, adsUserData, $log) {

    function displayData(data){
        $scope.data = data;
        $scope.ads = data.ads;
        $scope.totalAds = data.ads.length;
    }

    adsUserData.getAll(1)
        .$promise
        .then(displayData,
        function (error) {
            $log.error(error);
        });

    $scope.pageChanged = function(newPage) {
        adsUserData.getAll(newPage)
            .$promise
            .then(displayData);
    };

    $scope.createAdd = function() {
       var data = {
           title : $scope.title,
           text : $scope.text
           //imageDataUrl : null,
           //categoryId : null,
           //townId : null
       };

        adsUserData.create(data)
    }
});