angular.module('app1').controller('accountController', function($scope, service){

  $scope.checked = true;
// **************** this function will get all the data from the text_version6 table ****************************
    $scope.getAllData = function() {
         service.getAllDataFromTextTable_version5()
         .then(function(response){
            console.log(response);
            $scope.texts = response;
         });
    };
// **********************returns the word length of the text input************************************
    $scope.datacheck = function() {
          if ($scope.texts[0].count) {
              $scope.checked = !$scope.checked
              return
          }
          $scope.texts  = $scope.texts.map(function(text, index){
            text.count = service.dataAnalysis(text)
            text.len = service.estTime(text)
            return text;

          })

              $scope.checked = !$scope.checked
    };



})
