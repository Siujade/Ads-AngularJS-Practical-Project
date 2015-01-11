app.directive('ngDisplay', [function () {
    return {
        restrict: 'A',
        templateUrl: './templates/browse.html',
        link: function (scope, element, attrs) {

            var $browser =  $('#browser');

            $browser.change(function(){
                $('.image-data').text($browser.val());
                readURL(this)
            });

            function readURL(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        scope.imgUrl = reader.result;

                        $('.preview').attr('src', e.target.result);
                    };
                    reader.readAsDataURL(input.files[0]);
                } else {
                    scope.msgBox.error('Unsupported image format!');
                }
            }
        }
    }
}]);



