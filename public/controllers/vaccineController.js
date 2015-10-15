app.controller('vaccineController', function($scope, vaccineService){
  vaccineService.all().then(function(vaccines){
    $scope.vaccines = vaccines;
  });
});


app.controller('oneVaccineController', function($scope, vaccineService){
  vaccineService.one().then(function(oneVaccine){
    $scope.oneVaccine = oneVaccine;
  });
})
