angular.module('AppFilm').service('BuildUrl', function() {
    this.token = "931e54c126cfca6e31b0c905d36d6614";
    this.base = "https://api.themoviedb.org/3/";

    this.bindParams = function(url) {
        var self = this;
        var part = '';
        if (this.token != '')
            part = this.base + url + "?api_key=" + this.token;
        return part;
    };
});