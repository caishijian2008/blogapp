var loginCtrl = angular.module('loginCtrl', []);
loginCtrl.controller('loginCtrl', ['$scope', function($scope){
	$scope.user = {
		uemail: "",
		upassword: "",
		rememberme: true
	};
	$scope.loginClick = function() {
		document.write($scope.user.uemail + "<br>" + $scope.user.upassword+ "<br>" + $scope.user.rememberme);
	};
}]);

