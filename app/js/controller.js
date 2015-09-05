var appCtrl = angular.module('appCtrl', []);

appCtrl.controller('wdListCtrl',['$scope', '$rootScope', '$http',
	function($scope, $rootScope, $http) {
		$rootScope.headTitle = $rootScope.title = "xxxx";
		$rootScope.favBol = false;
		$rootScope.backBol = false;

		$http.get('./json/yywd.json')
		.then(function(data){
			console.log(data);
			$scope.branchs = data.data.branchs;
		}, function(data){
			console.log(data);
		});
	
}]);

appCtrl.controller('wdXqCtrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('./json/wdxq.json')
		.then(function(data){
			console.log(data);
			$scope.branch = data.data;
		})
	}
	])