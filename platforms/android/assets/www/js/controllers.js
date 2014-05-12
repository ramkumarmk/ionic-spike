var dbID = 0

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
	db.transaction(function(tx){
  			tx.executeSql('SELECT * FROM WELEND', [], function(tx, result){
  				$scope.dbCount = result.rows.length
  				dbID = result.rows.length
  			})
  	}, errorDBCB);

	$scope.saveDB = function(){
  	db.transaction(function(tx){
  		angular.forEach($scope.contacts, function(contact){
  			dbID = dbID + 1
  			tx.executeSql("INSERT INTO WELEND (id, data) VALUES ("+dbID+", '"+ contact.displayName+"')");
  		})
  	}, errorDBCB, successDBCB);

  	db.transaction(function(tx){
  			tx.executeSql('SELECT * FROM WELEND', [], function(tx, result){
  				$scope.dbCount = result.rows.length
  			})
  	}, errorDBCB);
	};
});
