angular.module('app1').controller('accountController', function($scope, service){


// **************** this function will get all the data from the text_version6 table ****************************
    $scope.getAllData = function() {
         service.getAllDataFromTextTable_version5()
         .then(function(response){
            console.log(response);
            $scope.texts = response;
         });
    };
// **********************returns the word length of the text input************************************
    $scope.datacheck = function(text, index) {
          $scope.texts[index].count = service.dataAnalysis(text)
          $scope.texts[index].len = service.estTime(text)
         };



})
