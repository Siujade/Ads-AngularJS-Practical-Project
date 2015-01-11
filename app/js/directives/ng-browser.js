app.directive('ngDisplay', [function () {
    return {
        restrict: 'A',
        templateUrl: './templates/browse.html',
        link: function (scope) {
            var $browser =  $('#browser');

            $browser.change(function(){
                $('.image-data').text($browser.val());
                readURL(this);
            });

            function readURL(input) {
                var file = input.files[0];
                if (file.type.match(/image\/.*/)) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        scope.imgUrl = reader.result;

                        $('.preview').attr('src', e.target.result);
                    };
                    reader.readAsDataURL(input.files[0]);
                } else {

                    scope.msgBox.error('Unsupported format!');
                }
            }
        }
    }
}]);



