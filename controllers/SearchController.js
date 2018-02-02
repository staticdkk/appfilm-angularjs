angular.module('AppFilm').controller('SearchController', function($rootScope, $scope, $http, $location, $log, $stateParams, Film, BuildUrl, CallApi, reverseFilter) {

    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        console.log("loading Controller");
        // var $gallery = $('.gallery');
        // $gallery.imagesLoaded(function() {
        //     applyIsotope();
        // });

        // /*  Apply Isotope plugin 
        //     isotope.metafizzy.co
        // */
        // var applyIsotope = function() {
        //     $gallery.isotope({
        //         itemSelector: '.gallery-item',
        //         masonry: {
        //             columnWidth: 200,
        //             gutter: 10,
        //             isFitWidth: true
        //         }
        //     });
        // }
    });

    $scope.params = $location.search();

    var getData = function(page) {
        var url = BuildUrl.bindParams("search/movie") + "&query=" + $scope.params.query + "&page=" + page;
        $log.info(url);

        CallApi.callApiGet(url).then(function(data) {
            Film.setListfilmEmpty();
            data.data.results.forEach(function(film) {
                Film.addfilm(film);
            });
            $scope.listfilm = Film.listfilm;
            $log.info(data.data.results);
            $log.info(Film);
            $scope.page = data.data.page;
            $scope.total_pages = data.data.total_pages;
            $scope.total_results = data.data.total_results;
        });
        // $location.path('/search').search({ query: $scope.search, page: page });
    }
    getData(1);


    $scope.openViewDetail = function(filmid) {
        $location.path('/details').search({ id: filmid });
    };

    $scope.listfilm = Film.listfilm;

    $scope.nextPage = function() {
        // Film.setListfilmEmpty();
        var page = $scope.page + 1;
        getData(page);
    }

    $scope.prevPage = function() {
        // Film.setListfilmEmpty();
        var page = $scope.page - 1;
        getData(page);
    }
});