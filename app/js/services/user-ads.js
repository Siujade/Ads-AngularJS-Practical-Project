app.factory('adsUserData', function ($resource, $http) {
    var userData = sessionStorage.token;
    //var url = 'http://localhost:1337/api/user/ads';
    var url = 'http://softuni-ads.azurewebsites.net/api/user/ads';
    var resource = $resource(
        url,
        {id: '@id'},
        {
            update: {
                method: 'GET'
            }
        });

    $http.defaults.headers.common['Authorization'] = 'Bearer ' + userData;

    function getAllAds(page) {
        var startPage = page || 1;
        var data = $resource(
            url + "?pagesize=6&startpage=" + startPage,
            {id: '@id'},
            {
                update: {
                    method: 'GET'
                }
            });

        return data.get();
    }

    function createNewAd(ad) {
        return resource.save(ad);
    }

    function getAdById(id) {
        return resource.get({id: id});
    }

    function editAd(id, ad) {
        return resource.update({id: id}, ad);
    }

    function deleteAd(id) {
        return resource.delete({id: id});
    }

    return {
        getAll: getAllAds,
        create: createNewAd,
        getById: getAdById,
        edit: editAd,
        delete: deleteAd
    }
});