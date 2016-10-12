angular.module('app1').service('service', function($http){

    this.userInput = function(text){
        return $http({
            method: 'POST',
            url: '/api/text',
            data: {arrayname: text}
            }).then(function(response){
              return response.data;
        });
      };

      // getAllDataFromTextTable_version5 is connected to the accountController and setup a request to get all the da
      // from the text_version5 talbe
          this.getAllDataFromTextTable_version5 = function(){
              return $http({
                  method: 'GET',
                  url: '/api/GetAll'
                  }).then(function(response){
                    return response.data;
              });
          };

          this.checkUserEmail = function(email){
              return $http({
                  method: 'POST',
                  url: '/api/login',
                  data: email
                  }).then(function(response){
                    return response.data;
              });
          };

          this.google = function(){
              return $http({
                  method: 'GET',
                  url: '/api/login/google'
                  }).then(function(response){
                    return response.data;
              });
          };
// ********************** connects to the datacheck on accountController and send the arrayname length ************************
          this.dataAnalysis = function(text){
              var a1 = text.arrayname.split(' ')
              var a2 = a1.filter(function(a, b, c){
                      return a !=='';
              })
              return a2.length;
          };

// ********************** connects to the datacheck on accountController and send the arrayname length ************************
          this.estTime = function(text){
              var a1 = text.arrayname.split(' ');
              var a2 = a1.filter(function(a, b, c){
                      return a !=='';
              });
              return Math.round(a2.length / 1.833) + " " + 'sec';
          };

       });
