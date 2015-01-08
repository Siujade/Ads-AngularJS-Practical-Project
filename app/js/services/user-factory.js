app.factory('userData', function ($resource, $http) {
    //var rootUrl = 'http://localhost:1337/api/user/';
    var url = 'http://softuni-ads.azurewebsites.net/api/user';
    var resource = $resource(url + '/:path/', null,
        {
            update : {
                method: 'PUT'
            }
        });

    function setHeaders(data) {
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + data['access_token'];
        sessionStorage.token = 'Bearer ' + data['access_token'];
        sessionStorage.username = data.username;
    }

    function getHeaders() {
        $http.defaults.headers.common['Authorization'] = sessionStorage.token;
    }

    function registerNewUser(userData) {

        return resource.save({path: 'register'}, userData);
    }

    function login(userData) {

        return resource.save({path: 'login'}, userData);
    }

    function logout() {
        getHeaders();
        resource.save({path: 'logout'}, {});
        sessionStorage.clear();
        location.href = "#/home";
    }

    function getData() {
        getHeaders();

        return resource.get({path: 'profile'});
    }

    function editProfile(data) {
        getHeaders();

       return resource.update({path: 'profile'}, data);
    }

    function changePassword(data) {
        getHeaders();

        return resource.update({path: 'changePassword'}, data);
    }

    return {
        login : login,
        logout : logout,
        register: registerNewUser,
        getData : getData,
        editProfile : editProfile,
        changePassword : changePassword,
        setHeaders : setHeaders
    }
});
