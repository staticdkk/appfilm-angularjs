angular.module('AppFilm').filter('reverse', function() {
    return function(input, uppercase) {
        input = input || '';
        var out = '';
        for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }

        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    };
});

angular.module('AppFilm').filter("trustUrl", ['$sce', function ($sce) {
    return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
    };
}]);