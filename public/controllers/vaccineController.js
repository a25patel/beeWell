app.controller('vaccineController', function($scope, vaccineService){
  $scope.variable = 'yellow';
  vaccineService.all().then(function(vaccines){
    $scope.vaccines = vaccines;
  })
});
