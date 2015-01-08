app.controller('UsersCtrl', function ($scope, $location, userData, $log) {

    function getAuthData(isLogin) {
        if(isLogin) {
            return {
                username: $scope.username,
                password: $scope.password
            }
        } else {
            return {
                username: $scope.username,
                email: $scope.email,
                password: $scope.password,
                confirmPassword: $scope.repeatPassword,
                name: $scope.name,
                phoneNumber: $scope.phone,
                townId: $scope.userTown.id
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
                    $log.error(error);
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
                $log.error(error);
            });
    };

    $scope.editProfile = function(data) {
        userData.editProfile(data)
    };

    $scope.changePassword = function(data) {
        userData.changePassword(data)
    };
});
