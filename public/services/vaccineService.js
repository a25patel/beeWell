app.factory('vaccineService', function($http, $location){
  return{
    all: function(){
      return $http.get('/api/vaccines').then(function(response){
        return response.data;
      })
    },
    one: function(){
      var id = $location.path();
      console.log(id);
      if(id != '/'){
        return $http.get('/api/vaccines' + id).then(function(response){
          console.log(response.data);
          return response.data;
        })
      } else{
        console.log("NO ID FOUND");
      }
    }
  }
});
