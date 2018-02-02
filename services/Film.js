angular.module('AppFilm').service('Film', function() {
    /**
     * init field film
     */
    this.initField = [
        'id',
        'backdrop_path',
        'original_title',
        'overview',
        'popularity',
        'poster_path',
        'release_date',
        'vote_average',
        'vote_count'
    ];
    /**
     * base url image
     */
    this.baseImage = "https://image.tmdb.org/t/p/w500";
    /**
     * list film
     */
    this.listfilm = [];
    /**
     * film select
     */
    this.filmSelect = {};
    /**
     * create init film
     */
    this.filmInit = function() {
        var film = {};
        $.each(this.initField, function(key, value) {
            film[value] = value != null ? null : "";
        });
        return film;
    };
    /**
     * list film empty
     */
    this.setListfilmEmpty = function() {
            var self = this;
            if (self.listfilm.constructor === Array) {
                self.listfilm = [];
            }
        }
        /**
         * add film to list film
         * @param {*} data 
         */
    this.addfilm = function(data) {
        var self = this;
        var film = {};
        $.each(this.initField, function(key, value) {
            if (data[value] == data.poster_path) {
                film[value] = self.baseImage + data[value];
            } else {
                film[value] = data[value] != null ? data[value] : '';
            }
        });
        self.listfilm.push(film);
    };

    /**
     * get film in list film
     * @param {*} filmId 
     */
    this.getfilm = function(filmId) {
        var self = this;
        return this.listfilm.find(p => p.id === filmId) ? this.listfilm.find(p => p.id === filmId) : null;
    };
    /**
     * get value => key of film 
     * @param {*} filmId 
     * @param {*} key 
     */
    this.getValuefilm = function(filmId, key) {
        var self = this;
        var film = self.listfilm.find(p => p.id === filmId);
        return film[key];
    };
    /**
     * set value => key of film
     * @param {*} filmId 
     * @param {*} key 
     * @param {*} value 
     */
    this.setValuefilm = function(filmId, key, value) {
        var self = this;
        self.listfilm.find(p => p.id === filmId)[key] = value;
    };
    /**
     * film select empty
     */
    this.setfilmSelectEmpty = function() {
        var self = this;
        if (self.filmSelect.constructor === Object) {
            self.filmSelect = {};
        }
    };
    /**
     * set film select to data
     * @param {*} data 
     */
    this.setfilmSelect = function(data) {
        var self = this;
        var film = {};
        $.each(this.initField, function(key, value) {
            if (data[value] == data.poster_path) {
                film[value] = self.baseImage + data[value];
            } else {
                film[value] = data[value] != null ? data[value] : '';
            }
        });
        self.filmSelect = film;
    };
    /**
     * get value => key film select
     * @param {*} key 
     */
    this.getValuefilmSelect = function(key) {
        var self = this;
        return self.filmSelect[key];
    };
    /**
     * set value => key film select
     * @param {*} key 
     * @param {*} value 
     */
    this.setValuefilmSelect = function(key, value) {
        var self = this;
        self.filmSelect[key] = value;
    };
});