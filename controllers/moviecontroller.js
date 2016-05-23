(function () {
  angular
  .module("myApp")
  .controller("MovieController", MovieController);

  function MovieController($routeParams, MovieServices) {
    var vm = this;
    MovieServices.getOMDBMovies($routeParams.id).then(function(data){
      vm.results = data.data.Search;
    });
  }
})();
