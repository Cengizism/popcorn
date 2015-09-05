(function() {
  'use strict';

  angular
    .module('lastFm')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
