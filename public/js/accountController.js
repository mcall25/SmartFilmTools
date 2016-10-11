angular.module('app1').controller('accountController', function($scope, service){


// this function will get all the data from the text_version5 table
    $scope.getAllData = function() {
         service.getAllDataFromTextTable_version5()
         .then(function(response){
          //  console.log(response);
            $scope.texts = response;
         });
    };
    $scope.datacheck = function(text) {
         service.dataAnalysis(text)
          $scope.michael2 = service.michael
            console.log($scope.michael2.length);
         };



})
