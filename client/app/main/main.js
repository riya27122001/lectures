'use strict';

angular.module('lecturesApp')
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      template: '<main></main>'
    });
  });
