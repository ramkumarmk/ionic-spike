angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Sruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    load_all: function(scope) {
      $http.get("http://192.168.199.231:3000/mobile_loans").
        success(function(data){
          scope.friends = data;
        })
    },
    get: function(friendId, scope) {
      $http.get("http://192.168.199.231:3000/mobile_loans").
        success(function(data){
          scope.friends = data;
        })
    },
    onContactError: function(){
      console.log("error");
    },
    all_contacts: function(scope){
      var options = new ContactFindOptions();
      options.filter="ram";
      options.multiple=true;
      var fields = ["*"];
      navigator.contacts.find(fields, function(contacts){
        console.log(contacts);
        scope.contacts = contacts;
        scope.$apply();
      }, this.onContactError, options);
    }
  }
});
