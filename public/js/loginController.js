angular.module('app1').controller('loginController', function($scope, service){

  $scope.test = ' michael is learning howto code ';



  $scope.google = function() {
      service.google()
    }
})
