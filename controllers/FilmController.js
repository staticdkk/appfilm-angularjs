angular.module('AppFilm').controller('FilmController', function($rootScope, $scope, $http, $location, $log, $stateParams, Film, BuildUrl, CallApi, reverseFilter) {

    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        console.log("loading Controller");

    });

    $scope.params = $location.search();

    CallApi.callRestApiGet("movie/"+$scope.params.id).then(function(data) {
        Film.setfilmSelect(data.data);
        $scope.film = Film.filmSelect;
    });

    CallApi.callRestApiGet("movie/"+$scope.params.id+"/videos").then(function(data) {
        var arr = [];
        var baseurl = "https://www.youtube.com/embed/";
        $.each(data.data.results, function(key, value){
            value["key"] = baseurl+value["key"];
            arr.push(value["key"]);
        });
        $scope.videos = arr;
        console.log( $scope.videos);
    });

});