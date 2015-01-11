app.factory('publicData', function ($resource) {
    //var url = {
    //    ads: 'http://localhost:1337/api/ads',
    //    categories: 'http://localhost:1337/api/categories',
    //    towns: 'http://localhost:1337/api/towns'
    //};

    var url = {
        ads: 'http://softuni-ads.azurewebsites.net/api/ads',
        categories: 'http://softuni-ads.azurewebsites.net/api/categories',
        towns: 'http://softuni-ads.azurewebsites.net/api/towns'
    };

    function getAllAds (startPage, categoryId, townId) {
        var data = $resource(url.ads,
            {
                categoryId : categoryId,
                townId : townId,
                pagesize : 4,
                startpage : startPage
            });

        return data.get();
    }

    function getAllCategories(){
        var data = $resource(url.categories);

        return data.query();
    }

    function getAllTowns() {
        var data = $resource(url.towns);

        return data.query();
    }

    return {
        getAll: getAllAds,
        getAllCategories : getAllCategories,
        getAllTowns : getAllTowns
    }
});