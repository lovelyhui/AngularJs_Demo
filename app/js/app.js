var PingAn = angular.module('PingAn',[
		'ngRoute',
		'appCtrl'
	]);

PingAn.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/',{
			templateUrl:'js/views/wd/list.html',
			controller:'wdListCtrl'
		})
		.when('/wdxq',{
			templateUrl:'js/views/wd/xq.html',
			controller: 'wdXqCtrl'
		})
		.otherwise({
			redirectTo:'/'
		});	
}])