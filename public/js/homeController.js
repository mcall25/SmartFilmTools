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

      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
      $scope.results1 = '';
      var results2 = '';

      SpeechRecognition.continuous = true;   //Suitable for dictation.
      SpeechRecognition.interimResults = true;  //If we want to start receiving results even if they are not final.
      //Define some more additional parameters for the recognition:
      SpeechRecognition.lang = "en-US";
      SpeechRecognition.maxAlternatives = 1; //Since from our experience, the highest result is really the best...

        $scope.startButton = function(event) {
                SpeechRecognition = new webkitSpeechRecognition(); //That is the object that will manage our whole recognition process.
                SpeechRecognition.start()

                  SpeechRecognition.onresult = function(event) { //the event holds the results
                //Yay – we have results! Let’s check if they are defined and if final or not:
                    if (typeof(event.results) === 'undefined') { //Something is wrong…
                        recognition.stop();
                        return;
                    }

                    for (var i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) { //Final results
                            console.log("final results: " + event.results[i][0].transcript);   //Of course – here is the place to do useful things with the results.
                              results2 = event.results[i][0].transcript;

                        } else {   //i.e. interim...
                            console.log("interim results: " + event.results[i][0].transcript);  //You can use these results to give the user near real time experience.
                            $scope.results1 = event.results[i][0].transcript;
                        }
                    } //end for loop

                    $scope.results1 = results2;
                    console.log($scope.results1 + ' ' + "this is results1");

                }
    }
          $scope.results1 = results2;


        $scope.endButton = function(event) {
              SpeechRecognition.stop()

        }







});
