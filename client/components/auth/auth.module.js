'use strict';

angular.module('lecturesApp.auth', ['lecturesApp.constants', 'lecturesApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
