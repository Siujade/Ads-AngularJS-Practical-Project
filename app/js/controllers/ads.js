app.controller('LoadAllAddsCtrl', function($scope, adsData, $log) {

    function displayData(data){
            $scope.data = data;
            $scope.ads = data.ads;
            $scope.totalAds = data.ads.length;
    }

    adsData.getAll(1)
        .$promise
        .then(displayData,
        function (error) {
            $log.error(error);
        });

    $scope.pageChanged = function(newPage) {
        adsData.getAll(newPage)
            .$promise
            .then(displayData);
    };

});