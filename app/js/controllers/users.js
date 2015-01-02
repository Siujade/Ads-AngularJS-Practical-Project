app.controller('Users', function ($scope, userData, $log) {

    function getUserData() {
        return {
            username: $scope.username,
            email: $scope.email,
            password: $scope.password,
            confirmPassword: $scope.repeatPassword,
            name: $scope.name,
            phoneNumber: $scope.phone,
            townId: null //todo
        };
    }

    $scope.userAction = function(action) {
        userData.register(getUserData(), action)
            .$promise
            .then(function (data) {
                sessionStorage.token = data['access_token'];
                sessionStorage.username = data.username;
                location.href = ('#/home');
            },
            function (error) {
                $log.error(error);
            });
    };
});
