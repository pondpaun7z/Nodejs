(function() {
  'use strict';

  angular
    .module('app')
    .controller('ArticleController', ArticleController);

  ArticleController.$inject = ['$http'];

  function ArticleController($http) {
    var vm = this;
    vm.getAll = getAll();

    activate();

    function activate() {
      vm.title = "Hello Electon";
    }

    function getAll() {
      $http.get('/articles')
        .success(function(data) {
            vm.title = data
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    }

  }
})();
