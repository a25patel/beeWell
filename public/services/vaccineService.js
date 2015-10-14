app.factory('vaccineService', function($http){
  return{
    all: function(){
      return $http.get('/api/vaccines').then(function(response){
        console.log(response.data);
        return response.data;
      })
    }
  }
})
