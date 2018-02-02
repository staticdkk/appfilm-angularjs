angular.module('AppFilm').controller('HomeController', function($rootScope, $scope, $http, $location, $log, Film, BuildUrl, CallApi, reverseFilter) {

    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        console.log("loading Controller");
        var $gallery = $('.gallery');
        $gallery.imagesLoaded(function() {
            applyIsotope();
        });

        /*  Apply Isotope plugin 
            isotope.metafizzy.co
        */
        var applyIsotope = function() {
            $gallery.isotope({
                itemSelector: '.gallery-item',
                masonry: {
                    columnWidth: 200,
                    gutter: 10,
                    isFitWidth: true
                }
            });
        }

    });
    //get list film now_playing
    CallApi.callRestApiGet("movie/now_playing").then(function(data) {
        // Film.setListfilmEmpty();
        data.data.results.forEach(function(film) {
            Film.addfilm(film);
        });
    });

    $scope.listfilm = Film.listfilm;
    $scope.popupDetail = {};
    $scope.openPopupDetail = function(filmid) {
        var film = Film.getfilm(filmid);

        $scope.popupDetail = film;
    };
    $scope.openViewDetail = function(filmid) {
        $location.path('/details').search({ id: filmid });
    };
    // filter
    $scope.filter = "Filter";

    $scope.search = "";

    $scope.clickSearch = function() {
        $location.path('/search').search({ query: $scope.search });
    };

});