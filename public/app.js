var app = angular.module('beeWell', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('vaccines', {
      url: '/',
      templateUrl: 'partials/vaccines.html',
      controller: 'vaccineController'
    })
    .state('showVaccine', {
      url: '/:id',
      templateUrl: 'partials/oneVaccine.html',
      controller: 'oneVaccineController'
    })
});
