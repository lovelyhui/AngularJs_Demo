/*App Module*/

var myapp = angular.module('bookstore', [
	'ngRoute', 
	'ngAnimate',
	'bookstoreControls'
	]);

myapp.config(['$routeProvider',
	function($routeProvider){
	$routeProvider.
		when('/hello',{
			templateUrl:'partials/hellobookstore.html',
			controller:'helloControl'
		}).
		when('/list',{
			templateUrl:'partials/booklist.html',
			controller:'boollistControl'
		}).
		otherwise({
			redirectTo:'/hello'
		});
}]);