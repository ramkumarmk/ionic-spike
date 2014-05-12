angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Friends) {
  Friends.load_all($scope);
})

.controller('FriendsCtrl', function($scope) {
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, Friends) {
	Friends.all_contacts($scope)
	$scope.saveDB = function(){
  	db.transaction(function(tx){
  		tx.executeSql('INSERT INTO WELEND (id, data) VALUES (1, "First row")');
  	}, errorDBCB, successDBCB);   

	};
	$scope.loadDB = function(){

	};
});
