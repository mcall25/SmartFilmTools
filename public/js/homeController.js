angular.module('app1').controller('homeController', function($scope, service){


  $scope.textToKeep = [];
  var text = "";
  var keptText = "";
  $scope.textOnBox2 = "";

    $scope.input = function(text) {
        service.userInput(text)
        .then(function(response){
          return response;
        });
    };



$scope.showSelectedText = function() {
      // this is an empty string
      if (window.getSelection) {
          text =  window.getSelection().toString();
      }
  };

// the function is pushed witht the keep buttion
$scope.getSelectionText = function() {
          // looping through the array of textToKeep, takes previous value and return the current value together
              $scope.textToKeep.push(text);
              console.log($scope.textToKeep);
             keptText = $scope.textToKeep.reduce(function(p,c){
              return p +" "+ c;
        });
          $scope.textOnBox2 = keptText;
          $scope.textToKeep.shift()
          $scope.textToKeep.shift()

  };

  $scope.clear = function() {
      $scope.textOnBox2 = "";
      $scope.textToKeep = [];
      text = "";
      keptText = "";
      $scope.textOnBox2 = "";
      textToKeep = [""];
      textOnBox2 = "";
};

// plan - write out what functionailty i want and then creat function piece by piece to get that to work
    // when the mouse click is finish, i need to invoke this function


  // $scope.$watch('selected', function(newValue, oldValue) {
  //     console.log('newValue' ,newValue, 'oldValue', oldValue);
  //   });
});
