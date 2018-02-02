angular.module('AppFilm').directive('film', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/film.html',
        replace: true
    }
});

angular.module('AppFilm').directive('search', function() {
    return function(scope, element, attrs) {
        element.bind("keyup keypress", function() {
            scope.$apply(function() {
                scope.$eval(attrs.ngEnter);
            });
            event.preventDefault();
        });
    }
});