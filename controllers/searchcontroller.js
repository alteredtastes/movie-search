(function () {
  angular
  .module("myApp")
  .controller("SearchController", SearchController);

  function SearchController($location) {
    var vm = this;
    vm.submitSearch = function() {
      $location.path('/movie/' + vm.term);
    }
  }
})();
