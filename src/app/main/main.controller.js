(function() {
  'use strict';

  angular
    .module('popcorn')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log, Config, $http) {
    $scope.tiles = [];

    $scope.open = function (tile) {
      $log.debug(tile);
    };

    function fetchMovies () {
      return $http({
          url: 'http://api.themoviedb.org/3/discover/movie',
          method: "GET",
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
        }
      });
    }
  }
})();
