app.controller('LoadResourcesCtrl', function($scope, publicData, $log) {

    function displayData(data){
            $scope.data = data;
            $scope.ads = data.ads;
            $scope.totalAds = data.ads.length;
    }

    function loadPage(data) {
        publicData.getAll(1, data, 0)
            .$promise
            .then(displayData,
            function (error) {
                $log.error(error);
            });
    }

    loadPage();

    $scope.$on('id', function (event, data) {
        loadPage(data);
    });

    $scope.pageChanged = function(newPage) {
        publicData.getAll(newPage)
            .$promise
            .then(displayData);
    };
});