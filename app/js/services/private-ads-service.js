app.factory('adsUserData', function ($resource, $http) {

    var url = 'http://softuni-ads.azurewebsites.net/api/user/ads';
    //var url = 'http://localhost:1337/api/user/ads';
    var resource = $resource(url + '/:path/:id', null,
        {
            update : {
                method: 'PUT'
            }
        });

    function getAllAds(startPage, status) {
        $http.defaults.headers.common['Authorization'] = sessionStorage.token;

        var resource = $resource(url,
            {
                status: status,
                pagesize: 2,
                startpage: startPage
            });

        return resource.get();
    }

    function getAdById(id) {
       return resource.get({id: id});
    }

    function createNewAd(ad) {
        return resource.save(ad);
    }

    function editAd(id, action, ad) {
        var params = {
            id: id,
            path : action
        };
        return resource.update(params, ad);
    }

    function deleteAd(id) {
        return resource.delete({id: id});
    }

    return {
        getAll: getAllAds,
        getAdById : getAdById,
        create: createNewAd,
        edit: editAd,
        delete: deleteAd
    }
});