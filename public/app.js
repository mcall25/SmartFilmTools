angular.module('app1', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './views/home.html',
        controller: 'homeController'

      })

      .state('account', {
        url: '/account',
        templateUrl: './views/account.html',
        controller: 'accountController'
      })

      .state('login', {
        url: '/',
        templateUrl: './views/login.html',
        controller: 'loginController'
      });
  });
