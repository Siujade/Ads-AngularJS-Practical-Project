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
            .then(function (token) {
                alert('success');
                console.log(token);
            },
            function (error) {
                $log.error(error);
            });
    };
});
