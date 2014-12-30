app.controller('LoadAllAddsCtrl', function($scope, adsData, $log) {

    adsData.getAll()
        .$promise
        .then(function (data) {
            $scope.data = data;
            $scope.ads = data.ads;
        }, function (error) {
            $log.error(error);
        })
});