var App = angular.module('AppFilm', ["ui.router", "oc.lazyLoad"]);

angular.module('AppFilm').controller('MainController', function($rootScope, $scope, $http, $timeout, $log) {

    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        $.Pages.init();
    });

});

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/home.html");

    $stateProvider
        .state('home', {
            url: "/home.html",
            templateUrl: "./views/home.html",
            data: { pageTitle: 'Home' },
            controller: "HomeController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'AppFilm',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/js/gallery.js',
                            'services/BuildUrl.js',
                            'services/CallApi.js',
                            'services/Film.js',
                            'controllers/HomeController.js',
                        ]
                    });
                }]
            }
        })
        .state('details', {
            url: "/details",
            templateUrl: "./views/film.html",
            data: { pageTitle: 'Home' },
            controller: "FilmController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'AppFilm',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/js/gallery.js',
                            'services/BuildUrl.js',
                            'services/CallApi.js',
                            'services/Film.js',
                            'controllers/FilmController.js',
                        ]
                    });
                }]
            }
        })
        .state('search', {
            url: "/search",
            templateUrl: "./views/search.html",
            data: { pageTitle: 'Home' },
            controller: "SearchController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'AppFilm',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/js/gallery.js',
                            'services/BuildUrl.js',
                            'services/CallApi.js',
                            'services/Film.js',
                            'controllers/SearchController.js',
                        ]
                    });
                }]
            }
        })
        .state('comming', {
            url: "/comming",
            templateUrl: "./views/comming.html",
            data: { pageTitle: 'Comming' },
            controller: "CommingController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'AppFilm',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'assets/js/gallery.js',
                            'services/BuildUrl.js',
                            'services/CallApi.js',
                            'services/Film.js',
                            'controllers/CommingController.js',
                        ]
                    });
                }]
            }
        });
}]);