app.factory('userData', function ($resource) {
  //  var rootUrl = 'http://localhost:1337/api/user/';
    var rootUrl = 'http://softuni-ads.azurewebsites.net/api/user/';
    var resource = '';

    function registerNewUser(userData, url) {
        resource = $resource(rootUrl + url);

        return resource.save(userData);
    }

    function login(userData, url) {
        resource = $resource(rootUrl + url);

        return resource.save(userData);
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
        register: registerNewUser,
        edit: editAd,
        delete: deleteAd
    }
});
