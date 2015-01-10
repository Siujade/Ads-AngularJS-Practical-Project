app.controller('UsersCtrl', function ($scope, $location, userData) {

    function getAuthData(isLogin) {
        if(isLogin) {
            return {
                username: $scope.username,
                password: $scope.password
            }
        } else {
            var userTown = null;

            if($scope.userTown) {
                userTown = $scope.userTown.id;
            }
            return {
                username: $scope.username,
                email: $scope.email,
                password: $scope.password,
                confirmPassword: $scope.repeatPassword,
                name: $scope.name,
                phoneNumber: $scope.phone || '',
                townId: userTown
            };
        }
    }

    $scope.login = function() {
        userData.login(getAuthData(true))
            .$promise
                .then(function (data) {
                    userData.setHeaders(data);
                    $location.path('#/home');
                },
                function (error) {
                 $scope.msgBox.error(error.data.error_description);
                });
    };

    $scope.register = function() {
        userData.register(getAuthData())
            .$promise
            .then(function (data) {
                userData.setHeaders(data);
                $location.path('#/home');
            },
            function (error) {
               // $scope.msgBox.error(error.data.error_description);
            });
    };

    $scope.editProfile = function(data) {
        userData.editProfile(data)
    };

    $scope.changePassword = function(data) {
        userData.changePassword(data)
    };
});
