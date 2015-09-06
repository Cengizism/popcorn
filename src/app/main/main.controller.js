(function() {
  'use strict';

  angular
    .module('popcorn')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log, Config, $http, rx) {
    $scope.search = '';
    $scope.tiles = [];

    function fetchMovies () {
      return $http({
          url: 'http://api.themoviedb.org/3/discover/movie',
          method: 'GET',
          params: {
              api_key: Config.api_key,
              format: 'json'
          }
      });
    }
    fetchMovies().then(function (movies) {
      $scope.tiles = buildGrid(movies.data.results);
    });

    function buildGrid(movies) {
      return movies.map(function (movie) {
        return {
          title: movie.title,
          span: {
            col: 1,
            row: 2
          },
          poster: 'http://image.tmdb.org/t/p/w500' + movie.poster_path
        };
      });
    }

    $scope.results = [];

    var search = function(q) {
        var deferred = $http({
                url: 'http://api.themoviedb.org/3/search/movie',
                method: 'GET',
                params: {
                    query: q,
                    api_key: Config.api_key
                }
            });

        return rx.Observable
                 .fromPromise(deferred)
                 .retry(10)
                 .map(function(response) {
                   return response.data.results;
                 });
    };

    $scope
      .$toObservable('search')
      .throttle(300)
      .map(function(data) {
        if (data.newValue.length > 3) {
          return data.newValue;
        }
      })
      .distinctUntilChanged()
      .select(search)
      .switchLatest()
      .subscribe(function(val) {
        $scope.tiles = val;
      });

    $scope.open = function (tile) {
      $log.debug(tile);
    };
  }
})();
