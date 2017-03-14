var loginCtrl = angular.module('loginCtrl', []);
loginCtrl.controller('loginCtrl', ['$scope', function($scope){
	$scope.user = {
		uemail: "123456@qq.com",
		upassword: "123456",
		rememberme: true
	};
	$scope.loginClick = function() {
		document.write($scope.user.uemail + "<br>" + $scope.user.upassword+ "<br>" + $scope.user.rememberme);
	};
}]);

