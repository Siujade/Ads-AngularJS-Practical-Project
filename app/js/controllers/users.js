app.controller('UsersCtrl', function ($scope, $location, userData, $log) {

    function getUserData(isLogin) {
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
        userData.login(getUserData(true))
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
        userData.register(getUserData())
            .$promise
            .then(function (data) {
                userData.setHeaders(data);
                $location.path('#/home');
            },
            function (error) {
                $log.error(error);
            });
    };
});
