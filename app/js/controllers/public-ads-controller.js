app.controller('LoadResourcesCtrl', function($scope, publicData, $log) {
    function displayData(data){
            $scope.data = data;
            $scope.ads = data.ads;
            $scope.totalAds = data.numPages * data.ads.length;
    }

    function loadPage() {
        publicData.getAll(1, $scope.selectedCategoryId, $scope.selectedTownId)
            .$promise
            .then(displayData,
            function (error) {
                $log.error(error);
            });
    }

    $scope.$watchCollection('[selectedCategoryId, selectedTownId]',function(){
        loadPage();
    });

    $scope.pageChanged = function(newPage) {
        publicData.getAll(newPage, $scope.selectedCategoryId, $scope.selectedTownId)
            .$promise
            .then(displayData);
    };
});