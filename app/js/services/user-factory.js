app.factory('userData', function ($resource, $http) {
    var rootUrl = 'http://localhost:1337/api/user/';
  //  var rootUrl = 'http://softuni-ads.azurewebsites.net/api/user/';
    var resource = '';

    function setHeaders() {
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.token;
    }

    function registerNewUser(userData, url) {
        resource = $resource(rootUrl + url);

        return resource.save(userData);
    }

    function login(userData, url) {
        resource = $resource(rootUrl + url);

        return resource.save(userData);
    }

    function logout() {
        setHeaders();
        resource = $resource(rootUrl + 'logout');
        resource.save();
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
        delete: deleteAd
    }
});
