(function() {
  'use strict';

  angular
    .module('popcorn')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log) {
    $scope.tiles = buildGridModel({
            title: "Tile-",
            background: ''
          });

    $scope.open = function (tile) {
      $log.debug(tile);
    };

    function buildGridModel(tileTmpl){
      var it, results = [ ];

      for (var j=0; j<15; j++) {
        it = angular.extend({},tileTmpl);
        it.title = it.title + (j+1);
        it.span  = { row : 1, col : 1 };

        switch(j+1) {
          case 1:
            it.background = "red";
            it.span.row = it.span.col = 2;
            break;
          case 2: it.background = "green";         break;
          case 3: it.background = "darkBlue";      break;
          case 4:
            it.background = "blue";
            it.span.col = 2;
            break;
          case 5:
            it.background = "yellow";
            it.span.row = it.span.col = 2;
            break;
          case 6: it.background = "pink";          break;
          case 7: it.background = "darkBlue";      break;
          case 8: it.background = "purple";        break;
          case 9: it.background = "deepBlue";      break;
          case 10: it.background = "lightPurple";  break;
          case 11: it.background = "yellow";       break;
          case 12: it.background = "pink";          break;
          case 13: it.background = "darkBlue";      break;
          case 14: it.background = "purple";        break;
          case 15: it.background = "deepBlue";      break;
        }

        results.push(it);
      }
      return results;
    }
  }
})();
