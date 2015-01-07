"use strict";

app.directive('ngDisplay', [function () {
    return {
        restrict: 'A',
        templateUrl: './templates/browse.html',
        link: function (scope, element, attrs) {

            $('#browser').change(function(){
                readURL(this)
            });

            function readURL(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        scope.imgUrl = reader.result;

                        $('#preview').css('backgroundImage', 'url(' + e.target.result + ')');
                    };
                    reader.readAsDataURL(input.files[0]);
                } else {

                    //$(attrs.preview).attr('alt', 'File type not supported!');
                }
            }
        }
    }
}]);



