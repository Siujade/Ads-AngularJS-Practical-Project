app.factory('adsUserData', function ($resource, $http) {
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.token;
    //var url = 'http://softuni-ads.azurewebsites.net/api/user/ads';
    var url = 'http://localhost:1337/api/user/ads';
    var resource = $resource('http://localhost:1337/api/user/ads/:path/:id', null,
        {
            update : {
                method: 'PUT'
            }
        });

    function getAllAds(startPage, status) {
        var resource = $resource(url,
            {
                status: status,
                pagesize: 4,
                startpage: startPage
            });

        return resource.get();
    }

    function createNewAd(ad) {
        return resource.save(ad);
    }

    function getAdById(id) {
        return resource.get({id: id});
    }

    function editAd(id, action) {
        var params = {
            id: id,
            path : action
        };

        return resource.update(params, {});
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