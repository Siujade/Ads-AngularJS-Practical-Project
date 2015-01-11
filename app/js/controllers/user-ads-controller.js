app.controller('UserAdsCtrl', function ($scope, $location,$timeout, adsUserData, $log) {
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

    function success(message) {
        $scope.msgBox.success(message);
    }

    function error(message) {
        $scope.msgBox.error(message);
    }

    $scope.$watch('selectedAdStatus', function () {
        loadPage();
    });

    $scope.pageChanged = function (newPage) {
        adsUserData.getAll(newPage, $scope.selectedAdStatus)
            .$promise
            .then(displayData);
    };

    $scope.changeImage = function(image){
        $scope.selectedAdData.changeImage = true;
        $scope.selectedAdData.imageDataUrl = image;
        if(image) {
            success("Picture submitted for edit.");
        } else {
            success("Picture submitted for delete.");
        }
    };

    $scope.createAdd = function () {
        var data = {
            title: $scope.title,
            text: $scope.text,
            imageDataUrl: $scope.imgUrl,
            categoryId: $scope.category.id,
            townId: $scope.town.id
        };

        adsUserData.create(data).$promise
            .then(function () {
                success('Ad successfully created.');
            },
            function () {
                error('Failed to create ad!')
            })
    };

    $scope.editAd = function (id, action, ad) {
        adsUserData.edit(id, action, ad)
            .$promise
            .then(function () {
                switch (action) {
                    case 'deactivate' :
                        success('Ad successfully deactivated');
                        $scope.selectedAdStatus = 0;
                        break;
                    case 'publishagain' :
                        success('Ad submitted for publishing.');
                         $scope.selectedAdStatus = 1;
                        break;
                    default :
                        success("Advertisement edited. Don't forget to submit it for publishing.");
                }
            },
            function () {
                $scope.msgBox.error('Failed to edit ad');
            });
    };

    $scope.deleteAd = function (id) {
        adsUserData.delete(id)
            .$promise
            .then(
            function () {
                success('Ad successfully deleted.')
            },
            function () {
                error('Failed to delete ad')
            });

        $scope.selectedAdStatus = 0;
    };
});















