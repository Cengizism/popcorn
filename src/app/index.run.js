(function() {
  'use strict';

  angular
    .module('popcorn')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
