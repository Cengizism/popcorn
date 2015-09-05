(function() {
  'use strict';

  angular
    .module('popcorn')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1441396803591;
  }
})();
