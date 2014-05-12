angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  Friends.load_all($scope);
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, Friends) {
	Friends.all_contacts($scope)
	$scope.saveDB = function(){
  	db.transaction(function(tx){
  		tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
  	}, errorCB, successCB);   

	};
	$scope.loadDB = function(){

	};
});
