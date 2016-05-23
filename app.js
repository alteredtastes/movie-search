(function () {
  angular
  .module("myApp", ["ngRoute"])
  .config(config);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: "partials/search.html",
      controller: "SearchController",
      controllerAs: "search"
    })
    .when('/movie/:id', {
      templateUrl: "partials/movie.html",
      controller: "MovieController",
      controllerAs: "movie"
    })
    .otherwise({
      redirectTo: '/'
    })
    $locationProvider.html5Mode(true);
  }
})();
