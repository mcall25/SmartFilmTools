angular.module('app1').controller('homeController', function($scope, service){

    $scope.test = 'nohema call';

    $scope.input = function(text) {
        service.userInput(text)
        .then(function(response){
          return response;
        });
    };

});
