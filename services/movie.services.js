(function () {
  angular
    .module('myApp')
    .factory('MovieServices', MovieServices);

  function MovieServices($http){
    return {
      getOMDBMovies: function(id) {
        return $http.get('https://www.omdbapi.com/?s=' + id);
      }
    }
  }
})();
