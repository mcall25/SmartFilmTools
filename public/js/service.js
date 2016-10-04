angular.module('app1').service('service', function($http){
  return {

      userInput: function(text){
        return $http( {
            method: "POST",
            url: './text',
            data: text
            }).then(function(response){
              return response.data;
        });
      }
    };
  });
