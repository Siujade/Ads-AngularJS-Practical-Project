app.factory('userData', function ($resource, $http) {
    //var rootUrl = 'http://localhost:1337/api/user/';
    var rootUrl = 'http://softuni-ads.azurewebsites.net/api/user/:path';
    var resource = $resource('http://softuni-ads.azurewebsites.net/api/user/:path');

    function setHeaders(data) {
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + data['access_token'];
        sessionStorage.token = 'Bearer ' + data['access_token'];
        sessionStorage.username = data.username;
    }

    function registerNewUser(userData) {

        return resource.save({path: 'register'}, userData);
    }

    function login(userData) {

        return resource.save({path: 'login'}, userData);
    }

    function logout() {
        $http.defaults.headers.common['Authorization'] = sessionStorage.token;
        resource.save({path: 'logout'},{});
        sessionStorage.clear();
        location.href = "#/home";
    }

    //**Admin actions**//
    function editAd(id, ad) {
        return resource.update({id: id}, ad);
    }

    function deleteAd(id) {
        return resource.delete({id: id});
    }

    return {
        login : login,
        logout : logout,
        register: registerNewUser,
        edit: editAd,
        delete: deleteAd,
        setHeaders : setHeaders
    }
});
